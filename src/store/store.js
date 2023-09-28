import { types } from "mobx-state-tree";

const User = types.model("User", {
  email: types.string,
  fullname: types.string,
  image: types.string,
});

const RootStore = types
  .model("RootStore", {
    users: types.map(User),
  })
  .actions((store) => ({
    setUser(email, image, fullname) {
      store.users.put({ image, fullname, email });
    },
  }));

const rootStore = RootStore.create();

export default rootStore;


// Example observer
// const UserList = observer(({ userStore }) => {}

// Example actions
// userStore.setUser(email, image, fullname);