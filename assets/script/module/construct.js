
export function build(data, query) {
    const Key = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789+-*/.,;:=?~^ <>][èàé&|{'#)(@\"’ô“”"

    const tokens = {
        "title": (text) => { let x = document.createElement("h2"); x.innerText = text; return x },
        "title2": (text) => { let x = document.createElement("h3"); x.innerText = text; return x },
        "text": (text) => { let x = document.createElement("p"); x.innerText = text; return x } ,
        "code": (text) => {
            let x = document.createElement("pre")
            let y = document.createElement("code")
            y.classList.add("language-csharp")
            y.innerText = text
            x.appendChild(y)
            return x
        },
        "link": (text) => { let x = document.createElement("a"); x.href = text; x.innerText = text; return x },
        "ligne": () => { return document.createElement("hr"); },
        "break": () => { return document.createElement("br"); },
        "zone": () => { }
    }


    let insideToken = false;
    let insideTokenValue = "";
    let currentToken = "";

    let zone = null;
    

    for (const char of data) {
        if (char === "§") {
            if (currentToken in tokens) {
                // token is found
                if (currentToken == "zone") {
                    if (zone === null) {
                        zone = document.createElement("div")
                        document.querySelector(query).appendChild(zone)
                    } else {
                        zone = null
                    }
                } else {
                    if (zone === null) {
                        document.querySelector(query).appendChild(tokens[currentToken](insideTokenValue))
                    } else {
                        zone.appendChild(tokens[currentToken](insideTokenValue))
                    }
                }
                currentToken = ""
                insideTokenValue = ""
            }

            insideToken = true;
        } else if (insideToken && char === ":") {
            if (currentToken in tokens) {
                // token is found
            } else {
                // token is not found
                console.log("error: " + currentToken)
                currentToken = ""
            }
            insideToken = false;
        } else if (insideToken) {
            //add letter for token
            currentToken += char
        } else {
            //add letter for text
            insideTokenValue += Key.indexOf(char) > -1 ? char : ""
        }
    }

}