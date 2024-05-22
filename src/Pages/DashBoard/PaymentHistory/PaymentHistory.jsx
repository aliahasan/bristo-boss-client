import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const {
    data: payments,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments/${user?.email}`);
      return res.data;
    },
  });
  if (isPending) {
    <span className="loading loading-bars loading-lg"></span>;
  }
  if (isError) {
    console.log(isError);
  }
  console.log(payments);
  return (
    <div>
      <SectionTitle
        heading={"Your Payment History "}
        subHeading={"Hariye jawa taka "}
      ></SectionTitle>
      <div>
        <h1 className="text-3xl ">Total Payments : {payments?.length} </h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Transaction ID</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <th>{payment.email}</th>
                  <td>{payment.transactionId}</td>
                  <td>{payment.price}</td>
                  <td>{payment.date}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
