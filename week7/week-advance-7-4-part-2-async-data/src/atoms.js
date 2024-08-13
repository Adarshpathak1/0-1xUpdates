import { atom, selector } from "recoil";
import  axios  from "axios";

//async data queries
export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),

  //for default values above is to get data fetch from server.
  //     default: {
  //         network: 0,
  //         jobs: 0,
  //         messaging: 0,
  //         notifications:0
  //   },
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allnotifications = get(notifications);

    return (
      allnotifications.network +
      allnotifications.jobs +
      allnotifications.messaging +
      allnotifications.notifications
    );
  },
});
