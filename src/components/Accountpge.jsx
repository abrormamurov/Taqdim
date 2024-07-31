import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AccountPage() {
  const { accountId } = useParams();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const foundAccount = accounts.find((acc) => acc.id === accountId);
    setAccount(foundAccount);
  }, [accountId]);

  if (!account) {
    return <div>Account not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{account.username}</h1>
      <p>Full Name: {account.full_name}</p>
      <p>Location: {account.location}</p>
      <p>Bio: {account.bio}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default AccountPage;
