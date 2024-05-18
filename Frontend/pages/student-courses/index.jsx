import StudentGuard from "@/components/guards/studentGuard";
import Layout from "@/components/layout_TAs";
import React from "react";

function MyCourses() {
  return (
    <StudentGuard>
      <Layout>
        <div className="bg-gray-100 h-full flex items-center justify-center ">
          <div className="flex justify-center items-center w-full">
            <div className="w-3/4 bg-white rounded-lg shadow-md p-8 overflow-y-auto">
              <div className="flex flex-col justify-center items-start mb-4">
                <h1 className="text-xl font-bold text-right justify-end text-black">
                  درس‌های من
                </h1>
                <div className="w-full h-px bg-gray-400"></div>
              </div>
              {/* Course details go here */}
              <div className="flex flex-row bg-gray-200 rounded-md p-4 mb-4 gap-8">
                <div className="flex flex-col w-3/4">
                  <h3 className="text-lg font-bold text-right text-black">
                    نام درس
                  </h3>
                  <div className="flex flex-row gap-32">
                    <div className="flex justify-between text-black">
                      <span className="pl-3">استاد:</span>
                      <span></span> {/* Replace with instructor name */}
                    </div>
                    <div className="flex justify-between text-black">
                      <span className="pl-3">ترم:</span>
                      <span></span> {/* Replace with semester */}
                    </div>
                    <div className="flex justify-between text-black">
                      <span className="pl-3">عنوان شما:</span>
                      <span></span> {/* Replace with your title */}
                    </div>
                  </div>
                  <div className="flex justify-between text-black">
                    <span className="pl-3">توضیحات:</span>
                    <span></span> {/* Replace with description */}
                  </div>
                </div>
                <div className="flex items-center justify-center w-1/4">
                  <button className=" py-2 px-4 bg-white text-black font-bold rounded-xl">
                    جزئیات درس
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </StudentGuard>
  );
}

export default MyCourses;
