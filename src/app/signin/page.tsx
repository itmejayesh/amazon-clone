"use client";
import React from "react";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../../../lib/supabase/products";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const page = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
      <div className="w-full max-w-md px-4 py-12 text-slate-50">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    </div>
  );
};

export default page;
