import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'productImages',
  access: (allow) => ({
    'product-images/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
      allow.guest.to(['read']),
    ]
  })
});