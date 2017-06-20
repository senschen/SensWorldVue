/**
 * Created by sens on 2017/6/20.
 */
export default function(element, method) {
    let usablePrefixMethod;
    ["webkit", "moz", "ms", "o", ""].forEach(function(prefix) {
        if (usablePrefixMethod) return;
        if (prefix === "") {
            method = method.slice(0,1).toLowerCase() + 	method.slice(1);
        }

        let typePrefixMethod = typeof element[prefix + method];

        if (typePrefixMethod + "" !== "undefined") {
            if (typePrefixMethod === "function") {
                usablePrefixMethod = element[prefix + method]();
            } else {
                usablePrefixMethod = element[prefix + method];
            }
        }
    });

    return usablePrefixMethod;
};