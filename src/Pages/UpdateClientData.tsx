import Hr from "../Components/Hr";
import Nav from "../Components/Nav";
import UpdateClientForm from "../Components/updateClient/UpdateClientForm";


export default function UpdateClientData() {

  return (
    <div className="w-full h-full bg-bg py-1">
        <Nav/>
        <Hr/>
        <UpdateClientForm/>
    </div>
  )
}
