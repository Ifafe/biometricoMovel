import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../lib/supabase';

const QUEUE_KEY = '@ponto_offline_queue';

export interface PontoEntry {
      id: string;
      profile_id: string;
      clock_in: string;
      location_id?: string;
      gps_coords: any;
      timestamp: string;
}

export const PontoQueue = {
      async add(entry: PontoEntry) {
            const current = await this.get();
            const updated = [...current, entry];
            await AsyncStorage.setItem(QUEUE_KEY, JSON.stringify(updated));
      },

      async get(): Promise<PontoEntry[]> {
            const data = await AsyncStorage.getItem(QUEUE_KEY);
            return data ? JSON.parse(data) : [];
      },

      async clear() {
            await AsyncStorage.removeItem(QUEUE_KEY);
      },

      async sync() {
            const queue = await this.get();
            if (queue.length === 0) return { success: true, count: 0 };

            try {
                  const { error } = await supabase.from('time_entries').insert(
                        queue.map(e => ({
                              profile_id: e.profile_id,
                              clock_in: e.clock_in,
                              gps_coords_json: e.gps_coords,
                              is_offline: true,
                        }))
                  );

                  if (error) throw error;

                  await this.clear();
                  return { success: true, count: queue.length };
            } catch (err) {
                  console.error('Sync error:', err);
                  return { success: false, error: err };
            }
      }
};
