"use client"
import { observer } from "mobx-react-lite";
import DataDashboard from "./DataDashboard";
import EmptyDashboard from "./EmptyDashboard";
import { useStore } from "@/models";

export default observer( function Dashboard() {
  //TODO: REVIEW ==> En esta vista en particular, se necesita la data de members y stock.
  const {members:{members}, products:{products}} = useStore()

  console.log({members, products})
  return <div>
    {(members.length && products.length) 
    ?  <DataDashboard />
      :<EmptyDashboard/>
    }
    </div>
})
