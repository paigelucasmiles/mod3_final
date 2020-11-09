Tag.destroy_all
Entry.destroy_all
Topic.destroy_all

auth_review = Entry.create(
    name: "Auth Review",
    url: "https://www.youtube.com/watch?v=KL4wGc1Vxm0&feature=youtu.be",
    kind: "video"
)

auth = Topic.create(
    name: "auth"
)

tag = Tag.create(
    name: "Auth",
    entry: auth_review,
    topic: auth
)