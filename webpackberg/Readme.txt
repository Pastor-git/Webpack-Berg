Dear future Maciej! 
Remember! Today is 26.04.2021!
I hope you are enjoying life! 

Always:

package: "name"

If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required. The name and version together form an identifier that is assumed to be completely unique. Changes to the package should come along with changes to the version. If you don't plan to publish your package, the name and version fields are optional.

The name is what your thing is called.

Some rules:

    The name must be less than or equal to 214 characters. This includes the scope for scoped packages.
    The names of scoped packages can begin with a dot or an underscore. This is not permitted without a scope.
    New packages must not have uppercase letters in the name.
    The name ends up being part of a URL, an argument on the command line, and a folder name. Therefore, the name can't contain any non-URL-safe characters.
