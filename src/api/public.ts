import { request } from '@/utils';

export function getAllCategories() {
  return request({
    url: 'global/blog/getCategory',
    method: 'GET',
  });
}
