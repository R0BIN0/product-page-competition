const ease = [0.08, 0.82, 0.17, 1];
export const classic_animation = {
    global_hidden: {
        y: -50,
        opacity: 0,
        transition: {
            duration: 0.75,
            ease: ease,
        },
    },

    global_show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: ease,
        },
    },
};

export const size_stagger_container_animation = {
    show: {
        transition: {
            staggerChildren: 0.05,
            ease: ease,
        },
    },

    exit: {
        transition: {
            staggerChildren: 0.05,
            ease: ease,
        },
    },
};

export const size_stagger_items_animation = {
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.05,
            ease: ease,
        },
    },

    exit: {
        y: -50,
        opacity: 0,
        transition: {
            duration: 0,
            ease: ease,
        },
    },
};
