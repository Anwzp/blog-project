
export const ParentRouterKey = {
  BlogPageLayout: 'BlogPageLayout'
} as const;

export type ParentRouterKey = typeof ParentRouterKey[keyof typeof ParentRouterKey];
