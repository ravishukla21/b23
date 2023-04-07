const useOnlineStatus = () => {
    
    if (navigator.onLine) {
        return("online");
      } else {
        return("offline");
      }
};

export default useOnlineStatus;