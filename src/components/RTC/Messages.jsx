import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import newRequest from "../../assets/utils/newRequest";
import Container from "../container/Container";
import Button from "../Button";
const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("userData"));
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <section className="w-full">
      <Container>
        <div className="flex">
        {isPending ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="font-poppins py-12 w-full">
            <div className="flex justify-between w-full">
              <h1 className="font-semibold text-black text-opacity-85 text-xl">Messages</h1>
            </div>
            <table className="w-full">
              <tr className="text-left h-24">
                <th>{currentUser.user.isClient ? "Freelancer" : "Client"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
              {data.map((c) => (
                <tr
                  className={
                    ((currentUser.user.isClient && !c.readByClient) ||
                      (!currentUser.user.isClient && !c.readByFreelancer)) &&
                    "bg-green-700 bg-opacity-95"
                  }
                  key={c.id}
                >
                  <td className="p-3">{currentUser.user.isClient ? c.freelancerId : c.clientId}</td>
                  <td className="p-3">
                    <Link to={`/message/${c.id}`} className="link">
                      {c?.lastMessage?.substring(0, 100)}...
                    </Link>
                  </td>
                  <td>{moment(c.updatedAt).fromNow()}</td>
                  {/* <td>
                    {((currentUser.user.isClient && !c.readByClient) ||
                      (!currentUser.user.isClient && c.readByFreelancer)) && (
                      <Button className="text-white font-medium cursor-pointer bg-blue-500 p-3" onClick={() => handleRead(c.id)}>
                        Mark as Read
                      </Button>
                    )}
                    {
                      console.log((!currentUser.user.isClient && !c.readByClient) || (currentUser.user.isClient && !c.readByFreelancer))
                    }
                    </td> */}
                    <td>
                  {((!currentUser.user.isClient && !c.readByClient) ||
                    (currentUser.user.isClient && !c.readByFreelancer)) && (
                      <Button className="text-white font-medium cursor-pointer bg-blue-500 p-3" onClick={() => handleRead(c.id)}>
                      Mark as Read
                    </Button>
                  )}
                </td>
                    
              
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
      </Container>
    </section>
  );
};

export default Messages;