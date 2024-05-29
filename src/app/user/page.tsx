"use client";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table } from "@/components/ui/table";
import UserTabel from "../component/Tabel";
import useBookStore from "@/store/page";
import { Button } from "@/components/ui/button";

type Inputs = {
  First: string;
  Last: string;
  Email: string;
  Mobile: number;
};

const User = () => {
  const toggleSidebar = useBookStore((state) => state.toggleSidebar);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: handleSubmit<Inputs> = (data, e) => {
    toggleSidebar(data), e.target.reset();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="h-fit px-2 py-1 flex items-center bg-stone-800 rounded text-white ">
          <IoMdAddCircleOutline />
          &nbsp; Add User
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">Add User Form</DialogTitle>
            <DialogDescription>
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  type="text"
                  placeholder="First name"
                  {...register("First", { required: true })}
                />
                {errors.First && (
                  <span className="text-red-600">This field is required</span>
                )}

                <Input
                  type="text"
                  placeholder="Last name"
                  {...register("Last", { required: true, maxLength: 100 })}
                />
                {errors.Last && (
                  <span className="text-red-600">This field is required</span>
                )}
                <Input
                  type="text"
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.Email && (
                  <span className="text-red-600">This field is required</span>
                )}
                <Input
                  type="tel"
                  placeholder="Mobile number"
                  {...register("Mobile", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                {errors.Mobile && (
                  <span className="text-red-600">This field is required</span>
                )}

                {/* <input
                 className="w-full"
                  {...register("Developer", { required: true })}
                  type="radio"
                  value="Yes"
                />
                <input
                 className="w-full"
                  {...register("Developer", { required: true })}
                  type="radio"
                  value="No"
                /> */}
              
                <Input
                  className="w-fit bg-slate-400 text-black"
                  type="submit"
                />
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <UserTabel />
    </div>
  );
};

export default User;
