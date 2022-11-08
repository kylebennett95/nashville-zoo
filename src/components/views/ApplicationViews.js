import React from "react"
import { StaffViews } from "./StaffViews"
import { PatronViews } from "./PatronViews"

export const ApplicationViews = () => {

    const localProjectUser = localStorage.getItem("project_user")
    const projectUserObject = JSON.parse(localProjectUser)
  
    if(projectUserObject.staff){
      return < StaffViews />
    } else {
      return < PatronViews />
    }
  }