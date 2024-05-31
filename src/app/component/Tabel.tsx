'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

import { Button } from "@/components/ui/button";
import useBookStore from "@/store/page";

const UserTabel = () => {
    const userListing = useBookStore((state) => state.stateupdate);
    const removeUser = useBookStore((state) => state.removeUser);

 function deleteUser(arry) {
    removeUser(arry)

 }

  console.log("userListing", userListing);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">First_name</TableHead>
            <TableHead className="w-[200px]">Last_name</TableHead>
            <TableHead className="w-[200px]">Email</TableHead>
            <TableHead className="text-right w-[200px]">
              Mobile_number
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userListing?.map((el ) => (
            <TableRow>
              <TableCell className="font-medium">{el?.First}</TableCell>
              <TableCell>{el?.Last}</TableCell>
              <TableCell>{el?.Email}</TableCell>
              <TableCell className="text-right">{el?.Mobile}</TableCell>
              <TableCell className="text-right">  <Button className="h-fit w-fit" onClick={()=>deleteUser(el?.First)}>
                  <MdDelete />
                </Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTabel;
