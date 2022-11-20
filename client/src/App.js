import React from "react";
import Sidebar from "./components/Sidebar";
export default function App() {
  return (
    <div>
      <Sidebar
        elements={[
          { name: "Home", link: "" },
          { name: "Esplora", link: "" },
          { name: "Notifiche", link: "" },
          { name: "Messaggi", link: "" },
          { name: "Segnalibri", link: "" },
          { name: "Liste", link: "" },
          { name: "Profilo", link: "" },
          { name: "Altro", link: "" },
        ]}
        user={{ firstName: "Tommaso", lastName: "Coviello" }}
      />
    </div>
  );
}
