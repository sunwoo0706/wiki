const constants = { color: "#ffcc00" };

export const styleSheet = `
    body {
        margin: 0;
        padding: 0;
        background: ${constants.color}
    }
    #roadmapWrapper {
        width: 50%;
        margin: 0 auto;
    }
    #roadmapWrapper * {
        width: 50vw;
    }
    #roadmapWrapper > h2 {
        color: white;
        font-size: 4vw;
    }
    hr {
        border: 2px solid white;
        margin-top: 5vw;
    }
    ul, li {
        list-style: none;
    }
    li {
        margin: 0;
        margin-left: -2.4vw;
        padding: 4px;
    }
    li > a {
        color: white;
        text-decoration: none;
    }
    li > a:hover {
        font-weight: bold;
    }
    @media screen and (max-width: 740px) {
        #roadmapWrapper {
            width: 90%;
            margin: 0 auto;
        }
        hr {
            margin: 0;
        }
        #roadmapWrapper * {
            width: 90vw;
        }
        #roadmapWrapper > h2 {
            font-size: 12vw;
        }
    }
`;
