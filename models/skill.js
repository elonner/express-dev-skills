const skills = [
    {id: 294857, name: 'HTML', level: 4},
    {id: 580189, name: 'JavaScript', level: 3},
    {id: 801845, name: 'CSS', level: 1}
];

module.exports = {
    getAll,
    getOne,
    create,
    removeOne,
    update 
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    //skill.name = skill;
    skill.id = Date.now() % 1000000;
    skill.level = 0;
    skills.push(skill);
}

function removeOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}