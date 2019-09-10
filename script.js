<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>the Vyne</title>
    </head>
    <body>
        <form
            onSubmit="postData(event)"
            class="signupForm"
        >
            <input
                type="text"
                class="email"
                placeholder="email"
            />
            <input
                type="password"
                class="password"
                placeholder="password"
            />
            <input
                type="text"
                class="username"
                placeholder="username"
            />
            <input type="submit" />
        </form>
        <form
            onSubmit = "createPost(event)"
            class="postForm"
        >
            <input
                type="text"
                class="title"
                placeholder="title"
            />
            <input
                type="text"
                class="description"
                placeholder="description"
            />
            <input type="submit" />
        </form>
        <ul class="posts">
        </ul>
        <script src="script.js"></script>
    </body>
</html>
