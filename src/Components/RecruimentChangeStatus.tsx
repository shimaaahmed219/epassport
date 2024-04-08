
import {
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

import { url } from "./URL";


interface User {
    id: number;
    status: string;
  } 

export default function RecruimentChangeStatus({
  setClient,
  user,
}: {
  setClient:unknown;
  user:User;
}) {
    const handilChange = async (
        event: SelectChangeEvent<unknown>,
        id: number
      ) => {
        try {
          const selectedValue = event.target.value;
          let rejectReasonManual = "";
      
          // Check if selected status is rejected
          if (selectedValue === "rejected") {
            // Prompt user to enter rejection reason using SweetAlert2
            const { value } = await Swal.fire({
              title: "the reason of refuse",
              input: "textarea",
              inputPlaceholder:
                "The purpose of the planned stay has not been established and its conditions are not m",
              inputAttributes: {
                autocapitalize: "off",
              },
              showCancelButton: true,
              confirmButtonText: "Save",
              cancelButtonText: "Cancel",
              confirmButtonColor: "#324134",
              cancelButtonColor: "#ccc",
              showLoaderOnConfirm: true,
              preConfirm: (reason) => {
                rejectReasonManual = reason;
              },
            });
      
            // If the user confirms and entered a reason, continue with the update
            if (value && value.trim() !== "") {
              // Perform the update with the entered reason
              const response = await axios.put(
                `${url}/clientOrder/${id}`,
                {
                  status: selectedValue,
                  reject_reason: rejectReasonManual,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                  },
                }
              );
      
              // Handle success and error responses
              if (response.status === 200) {
                // Update client status in state
                setClient((prevClients: { id: number; }[]) => {
                  return prevClients.map((client: { id: number }) => {
                    if (client.id === id) {
                      return {
                        ...client,
                        status: selectedValue,
                        reject_reason: rejectReasonManual,
                      };
                    } else {
                      return client;
                    }
                  });
                });
      
                Swal.fire({
                  title: "Success!",
                  text: "Client status updated successfully!",
                  icon: "success",
                });
              } else {
                throw new Error("Failed to update client status");
              }
            }
          } else if (selectedValue === "approved") {
            // Set received_type automatically to "mofa"
            const receivedType = "mofa";
      
            const response = await axios.put(
              `${url}/clientOrder/${id}`,
              {
                status: selectedValue,
                received_type: receivedType,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },
              }
            );
      
            // Handle success and error responses
            if (response.status === 200) {
              // Update client status in state
              setClient((prevClients: any[]) =>
                prevClients.map((client) =>
                  client.id === id
                    ? {
                        ...client,
                        status: selectedValue,
                        received_type: receivedType,
                      }
                    : client
                )
              );
      
              Swal.fire({
                title: "Success!",
                text: "Client status updated successfully!",
                icon: "success",
              });
            } else {
              throw new Error("Failed to update client status");
            }
          } else {
            // For other statuses ('pending' or any other), proceed with the update as before
            const response = await axios.put(
              `${url}/clientOrder/${id}`,
              {
                status: selectedValue,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                },
              }
            );
      
            // Handle success and error responses
            if (response.status === 200) {
              // Update client status in state
              setClient((prevClients: { id: number; }[]) =>
                prevClients.map((client: { id: number }) =>
                  client.id === id ? { ...client, status: selectedValue } : client
                )
              );
      
              Swal.fire({
                title: "Success!",
                text: "Client status updated successfully!",
                icon: "success",
              });
            } else {
              throw new Error("Failed to update client status");
            }
          }
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to update client status",
            icon: "error",
          });
        }
      };
      
  return (
    <div>
      <div className="xl:text-[20px] w-[150px] text-center text-[15px]  text-greenD ml-[40px]">
        {/* status */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" className="mt-[-10px]">
            status
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={user.status}
            onChange={(event) => handilChange(event ,user.id)}
            className="h-[30px] focus:outline-none"
          >
            <MenuItem value={"approved"}>
              <div className="flex items-center">
                <span className="px-2 py-2 rounded-full bg-approved mr-1"></span>
                <span>approved</span>
              </div>
            </MenuItem>
            <MenuItem value={"rejected"}>
              <div className="flex items-center">
                <span className="px-2 py-2 rounded-full bg-rejected mr-1"></span>
                <span>rejected</span>
              </div>
            </MenuItem>
            <MenuItem value={"processing"}>
              <div className="flex items-center">
                <span className="px-2 py-2 rounded-full bg-pending mr-1"></span>
                <span>pending</span>
              </div>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
