/*
    the filterName function do
    [1] checks if the name is empty of you don't provide name and return unknown
    [2] if name starts with space or end with space it trim the spaces 
    [3] if name is bigger than 10 characters it will return 10 chars only
    [4] if the name starts with _ it will delete it 
*/

function filterName(name) {
  if (name === "" || name === undefined) {
    name = "unknown";
  }

  if (name.startsWith(" ") || name.endsWith(" ")) {
    name = name.trim();
  }

  if (name.length > 10) {
    name = name.substring(0, 11);
  }

  if (name.startsWith("_")) {
    name = name.substring(1);
  }
  return name;
}

module.exports = filterName;
