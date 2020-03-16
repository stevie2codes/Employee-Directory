import axios from "axios";
import React from "react";

export default {
  search: function(query) {
    return axios.get("https://randomuser.me/api/?results=200&nat=us" + query);
  }
};
