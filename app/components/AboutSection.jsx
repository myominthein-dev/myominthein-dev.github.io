"use client";
import React, { useEffect, useRef } from "react";
import Container from "./Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SkillShowcase } from "./SkillShowcase";
import { motion, useInView, useAnimation } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Card, CardContent } from "@/components/ui/card";
import LearningCard from "./LearningCard";
import PersonalInfoCard from "./InfoCard";
import SectionHeader from "./SectionHeader";
import { childVariants, containerVariants, itemVariants, tabVariants } from "@/lib/animations";
import SubAboutTitle from "./SubAboutTitle";

const info = [
  {
    label: "Name",
    value: "Myo Min Thein",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Gender",
    value: "Male",
  },
  {
    label: "Marital Status",
    value: "Single",
  },
  {
    label: "Nationality",
    value: "Myanmar",
  },
  {
    label: "Address",
    value: "Mingaladon, Yangon (current - Taungoo)",
  },
  {
    label: "Phone",
    value: "09 451 819 025",
  },
  {
    label: "Email",
    value: "myomin9916@gmail.com",
  },
  {
    label: "Spoken Languages",
    value: "Burmese (Native) / English (Intermediate)",
  },
  {
    label: "Education",
    value: "First year of Economics of YUDE (paused)",
  },
];

const tabData = [
  { value: "experience", label: "Experience" },
  { value: "skill", label: "Skills" },
  { value: "learning", label: "Learning Journey" },
  { value: "personal", label: "Personal Info" },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount : 0.2});
  const controls = useAnimation();

  useEffect(()=>{ 
    if (isInView) {
      controls.start("visible");
    }
  },[controls, isInView])

  return (
    <section ref={sectionRef} className="xl:min-h-[100dvh]   3xl:min-h-[800px] mb-24" id="about">
      <Container>
        <div className="xl:px-20 lg:px-10">
          <SectionHeader>About Me</SectionHeader>
          <div>
            <Tabs defaultValue="experience" className="md:grid grid-cols-3">
            <motion.div initial="hidden" animate={controls} variants={containerVariants}>
                <TabsList className="flex flex-col gap-3 md:col-span-1">
                  {tabData.map((tab, index) => (
                    <motion.div key={index} className="w-full" variants={tabVariants}>
                      <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
                    </motion.div>
                  ))}
                </TabsList>
              </motion.div>


              <div className=" md:col-span-2 font-semibold text-neutral-300">
                <TabsContent value="experience">
                  <div className="px-5">
                    <SubAboutTitle title={"Experience"} />
                    <ScrollArea className="h-[600px] w-full  rounded-md  p-4">
                      <ExperienceCard
                        fromYear={"2023"}
                        toYear={"2024"}
                        title={
                          "Sale Operations (Sale, Merchandising, Inventory)"
                        }
                        company={"Sein Hinn Electronics Show Room"}
                        knowledge={[
                          "Communication skill improvement",
                          "POS system end-using",
                          "Product flow",
                        ]}
                      />

                      <motion.div
                       
                        animate={controls}
                        initial="hidden"
                        variants={itemVariants}
                      >
                        <Card className="overflow-hidden border border-gray-700 bg-gray-800 shadow-lg mb-5">
                          <CardContent className="p-6 space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="relative">
                                <motion.div
                                  className="absolute inset-0 bg-blue-500 rounded-full opacity-50"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                  }}
                                />
                                <motion.div
                                  className="relative z-10 size-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg"
                                  animate={{
                                    scale: [1, 0.9, 1],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                  }}
                                >
                                  <motion.div
                                    className="absolute inset-1 bg-purple-300 rounded-full opacity-30"
                                    animate={{
                                      scale: [1, 0.8, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "easeInOut",
                                    }}
                                  />
                                </motion.div>
                              </div>
                              <motion.div
                               
                                animate={controls}
                                initial="hidden"
                                variants={itemVariants}
                                className="flex-1"
                              >
                                <span className="text-sm font-medium text-blue-400">
                                  2025
                                </span>
                                <h3 className="text-sm lg:text-lg font-semibold text-gray-200">
                                  Seeking Opportunities in IT Firms
                                </h3>
                              </motion.div>
                            </div>
                            <div className="space-y-2 ml-10">
                              <h4 className="text-xs lg:text-sm font-medium text-gray-400">
                                Position :{" "}
                              </h4>
                              <p className="text-sm lg:text-lg text-gray-200">
                                Front-End Developer, Full-Stack Developer
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="skill">
                  <div className="px-5">
                    <SubAboutTitle title={"Skill"} />
                    <ScrollArea className="h-[600px]  w-full  rounded-md  p-4">
                      <SkillShowcase />
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="learning">
                  <div className="px-5">
                    <SubAboutTitle title={"Learning Journey"} />

                    <ScrollArea className="h-[600px] w-full  rounded-md  p-4">
                      <div className="flex flex-col gap-5">
                        <LearningCard
                          title={"Built Web Foundations from online sources"}
                        />
                        <LearningCard
                          title={"Completed Special Web Design at MMS-IT"}
                          skills={[
                            "HTML5",
                            "CSS3",
                            "Javascript",
                            "TailwindCss",
                            "React.js",
                            "Next.js",
                            "Git",
                            "Animation & Icon Libraries",
                          ]}
                        />
                        <LearningCard
                          title={"Completed Web App Development at MMS-IT"}
                          skills={[
                            "PHP",
                            "Mysql",
                            "Laravel",
                            "Required resources for Backend environment",
                          ]}
                        />
                        <LearningCard
                          title={"Successfully joined MMS Connections program"}
                          skills={[
                            "Software Development Life Cycle Introduction",
                            "How to connect remotely in development environment",
                            "Collaborative skill improvement",
                            "Team-Git skill required for real-world projects",
                            "Group-based projects Development",
                          ]}
                        />
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="personal">
                  <div className="px-5">
                    <SubAboutTitle title={"Personal Info"} />

                    <ScrollArea className="h-[600px] w-full  rounded-md  p-4">
                      <PersonalInfoCard items={info} />
                    </ScrollArea>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
