function HashMap(capacity) {
  this.capacity = capacity;
  this.table = [];
}
// We use this line to hash a string...
var myHashCode = myString.hashCode()
// ...based on this implementation:
String.prototype.hashCode = function()
{
  var hash = 0;
  if (this.length == 0) return hash;
  for (i = 0; i < this.length; i++) {
      char = this.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash &= hash; //Convert-->32b int
  }
  return hash;
}
// JS % acts oddly for negatives,
// so we define our own this way...
function mod(input, div)
{ return (input % div + div) % div; }
// ... and we use it this way:
var myIdx = mod(myHashCode,arrSize);


To Do 1
Hash: Add.Create an add(key, val) method on HashMap to add a new key and value to the map. This entails hashing key, mod’ing it into the
size of your array, and placing the value there.
Second: If two values hash to the same index, it causes a hash collision. Then, you should use a secondary array or SList instead of overwriting (losing) values. Do you still have to worry about hash collisions if you have a set, not a multiset?

Hash: Is Empty
Dude, what if you use a HashMap to find your hash cache, but someone stole it all? Bummer. Return whether this HashMap is empty. This is a one-liner but requires changes elsewhere.

Hash: Find Key
Create a find(key) method to return value for given key. If key is not found, return null.
Second: if you altered add(key,val) to handle collisions, extend find(key) accordingly.


To Do 2
Today we will create these exact methods and add them to our HashMap class implementation:
Hash: Remove. Create HashMap method remove(key) that finds key, removes key/value pair, and returns the value (or null if key not found in our map).
Hash: Load Factor. We may eventually want to grow our array size. Create HashMap method loadFactor() to return an elements/buckets ratio to monitor this.
Hash: Grow. Write a method grow() to increase the internal array of buckets by 50% (20-element array would become 30 elements). Afterward, rehash all keys, since your mod factor has changed...
Hash: Set Size. Write a method setSize(newCap) to set the capacity of the internal bucket array to a specific length. As with grow(), after changing the array length, you must rehash all keys.
Hash: Add. Create addMap(HashMap) that accepts another HashMap of key-value pairs and adds each pair to the existing map. For duplicate keys, new values overwrite old ones.
Second: incorporate a boolean input indicating whether new keys should overwrite existing.
Hash: Select Keys. Create method selectKeys(keyArray) to accepts an array of keys. Reject those keys in the existing map that are NOT in that array. If
your map contains {"cool":"Pariece", "smart":"Pariece", "tall":"Kareem"}, then map.selectKeys(["cool","smart"]) should change map to {"cool":"Pariece", "smart":"Pariece"}.