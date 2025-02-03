"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import  { motion } from "framer-motion";

const services = [
  {
    num: "81",
    title: "Web Development",
    description: "Lorem ipsum dolor sit, amet cnam nulla excepturi!",
    href: ""
  },
  {
    num: "82",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit, amet cnam nulla excepturi!",
    href: ""
  },
  {
    num: "83",
    title: "Logo Design",
    description: "Lorem ipsum dolor sit, amet cnam nulla excepturi!",
    href: ""
  },
  {
    num: "84",
    title: "SEO",
    description: "Lorem ipsum dolor sit, amet cnam nulla excepturi!",
    href: ""
  },
]



const Services = () => {
  return (
    <section className="min-h-[80hv] flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        service page
      </div>
    </section>
  )
}

export default Services