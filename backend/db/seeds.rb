Tag.destroy_all
Entry.destroy_all
Topic.destroy_all

auth_review = Entry.create(
    name: "Auth Review",
    url: "https://www.youtube.com/watch?v=KL4wGc1Vxm0&feature=youtu.be",
    kind: "video"
)

auth = Topic.create(
    name: "Auth"
)

project_managment = Topic.create(
    name: "Project Management"
)

rails = Topic.create(
    name: "Rails"
)

agile = Topic.create(
    name: "Agile"
)

javascript = Topic.create(
    name: "JavaScript"
)

css = Topic.create(
    name: "CSS"
)

html = Topic.create(
    name: "HTML"
)

git = Topic.create(
    name: "Git"
)

github = Topic.create(
    name: "GitHub"
)

tag = Tag.create(
    name: "Auth",
    entry: auth_review,
    topic: auth
)