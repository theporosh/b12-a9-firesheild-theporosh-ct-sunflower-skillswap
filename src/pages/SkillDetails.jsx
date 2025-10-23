import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SkillDetailsCard from "../components/SkillDetailsCard";

const SkillDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [skill, setSkills] = useState({});
  // console.log(data, id, skill);


  // Find the specific skill by ID
  useEffect(() => { 
    const skillDetails = data.find((singleSkill) => singleSkill.skillId === parseInt(id));
    setSkills(skillDetails);
  }, [data, id])


return (
    <section className="py-16 bg-base-100 w-11/12 mx-auto">
      <SkillDetailsCard skill={skill}></SkillDetailsCard>
    </section>
  );
};

export default SkillDetails;
