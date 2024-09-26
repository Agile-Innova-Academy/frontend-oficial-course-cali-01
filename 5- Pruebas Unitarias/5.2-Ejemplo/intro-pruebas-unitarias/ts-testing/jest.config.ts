
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    present: "ts-jest",
    testEnvironment: "jsdom",
    moduleFileExtesions: ["ts", "tsx", "js", "jsx"],
    transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)$",
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    }
}