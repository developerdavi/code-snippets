# MongoDB Counter
- Inspiration: MySQL auto_increment primary keys :key:

# Usage
*If I have a collation called "users", to get an auto incrementable ID, I should use:*

`getCounter('users') => 2`

# Important notes
- The function `getCounter` will automatically increment the currently stored last ID field by one.
  - So, if I use it again as used in the usage example, it will return me 3, instead of 2.
