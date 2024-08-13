import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});
export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobAtomCount = get(jobAtom);
    const notificationsAtomCount = get(notificationsAtom);
      const messagingAtomCount = get(messagingAtom);
      
      return networkAtomCount + jobAtomCount + notificationsAtomCount + messagingAtomCount;
  },
});
