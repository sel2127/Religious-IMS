import session from "express-session";

export const sessionMiddleware = session({
    secret: "2759fkn3knvkebvuebfkgh3ubevgo34yginreihg83rgbv",
    resave: false, saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
});