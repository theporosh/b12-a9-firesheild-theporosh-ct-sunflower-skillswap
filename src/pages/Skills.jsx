import SkillsCard from "../components/SkillsCard";


const Skills = ({skills}) => {
    

    // console.log(skills)

    return (
        <section className="py-12 bg-base-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Popular Skills
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill) => (

                        <SkillsCard key={skill.skillId} skill={skill} ></SkillsCard>

                        
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
