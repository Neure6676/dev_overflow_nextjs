import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: "1",
      title:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)? Chevron right icon",
    },
    {
      _id: "2",
      title:
        "How do I use express as a custom server in NextJS? Chevron right icon",
    },
    { _id: "3", title: "Can I get the course for free? Chevron right icon" },
    {
      _id: "4",
      title: "Redux Toolkit Not Updating State as Expected Chevron right icon",
    },
  ];

  const popularTags = [
    {
      _id: 1,
      name: "REACT.js",
      totalQuestions: 7,
    },
    {
      _id: 2,
      name: "NEXT js",
      totalQuestions: 45,
    },
    {
      _id: 3,
      name: "JavaScript",
      totalQuestions: 3,
    },
    {
      _id: 4,
      name: "MongoDB",
      totalQuestions: 1,
    },
  ];
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/questions/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="chevron right icon"
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;