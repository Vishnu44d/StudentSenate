/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Nav.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:09:31 by vishnu            #+#    #+#             */
/*   Updated: 2020/04/17 10:37:11 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var navItems = [
    {
        "title": "Home",
        "link": "",
        "child": null
    },
    {
        "title": "About",
        "link": "",
        "child": null
    },
    {
        "title": "The Body",
        "link": "Body",
        "child": [
            {
                "title": "The Executive Secretariat",
                "child": null
            },
            {
                "title": "The General Council",
                "child": null
            }
        ]
    },
    {
        "title": "Academic Societies",
        "link": "Academics",
        "child": [
            {
                "title": "Aerospace Engineering and Applied Mechanics",
                "child": null
            },
            {
                "title": "Architechture, Town and Regional Planning",
                "child": null
            },
            {
                "title": "Society of Civil Engineers",
                "child": null
            },
            {
                "title": "Electrical Engineers’ Society",
                "child": null
            },
            {
                "title": "Electronics and Telecommunication Engineering",
                "child": null
            },
            {
                "title": "Information Technology",
                "child": null
            },
            {
                "title": "Society of Mechanical Engineering",
                "child": null
            },
            {
                "title": "Metallurgy and Materials Engineering",
                "child": null
            },
            {
                "title": "Society of VLSI Technology (SOVT)",
                "child": null
            },
            {
                "title": "Society of Mining Engineers",
                "child": null
            },
        ]
    },
    {
        "title": "Cultural Societies",
        "link": "Culturals",
        "child": [
            {
                "title": "Catharsis",
                "child": null
            },
            {
                "title": "CodeIIEST",
                "child": null
            },
            {
                "title": "DebSoc",
                "child": null
            },
            {
                "title": "Euphony",
                "child": null
            },
            {
                "title": "Les Thespians",
                "child": null
            },
            {
                "title": "LitSoc",
                "child": null
            },
            {
                "title": "Quiz Maniac Beings",
                "child": null
            },
            {
                "title": "Reflexo-Beta",
                "child": null
            },
            {
                "title": "Robodarshan",
                "child": null
            },
            {
                "title": "SCAGE",
                "child": null
            },
            {
                "title": "Society of Games and Sports",
                "child": null
            },
            {
                "title": "Entrepreneurship Development Cell",
                "child": null
            },

        ]
    },
    {
        "title": "Fests",
        "link": "Fests",
        "child": null
    },
    {
        "title": "Ducumnets",
        "link": "Documents",
        "child": null
    },

]

export default navItems;