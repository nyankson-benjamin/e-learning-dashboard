import { ref, watchEffect } from "vue";
import store from "@/store";
const useAddUsers = () => {
  const email = ref("");
  const fname = ref("");
  const lname = ref("");
  const open = ref(false);
  const openFile = ref(false);
  const allSet = ref(false);

  watchEffect(() => {
    email.value === "" || fname.value === "" || lname.value === ""
      ? (allSet.value = false)
      : (allSet.value = true);
  });
  const handleAddUser = (title = "User") => {
    alert(title + " added successfully");
  };

  watchEffect(() => {
    open.value = store.getters.openModal;
  });

  watchEffect(() => {
    openFile.value = store.getters.openFileModal;

  });

  watchEffect(() => {
    if (store.getters.openModal) {
      email.value = "";
      fname.value = "";
      lname.value = "";
    }
  });

  return { email, fname, lname, open, openFile, allSet, handleAddUser };
};

export default useAddUsers;
