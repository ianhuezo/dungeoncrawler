# Dungeon Crawling Algorithm
1. Determine amount of rooms each time going to new stage and clear the previous level attributes- further levels = more rooms
2. Create a list of all squares already created on the level that are already used -seenRooms
3. Create a rooms list that has yet to be looked at -notYetSeenRooms
4. Create first square with randomized size- root node
    1. Attribute for # of rooms square will produce - max of 2 on each side
    2. Attribute for position of the current room
    3. Attribute for the corners of the current room
    4. Attribute for placement of cooridors to next rooms
    5. Planned rooms list created from the cooridors
    6. Attribute for direction of the planned room from the 'root' room
    7. Room 'collision' determinant using the list of squares produced and the current planned rooms
    8. From collision determinant, create rooms with their specific size
    9. Must ensure 
5. Assign all the rooms needing to be looked at from the planned rooms attribute from the squares - notYetSeenRooms
6. Remove current room from not to be looked at and put to already looked at -seenRooms
7. Rinse and repeate steps 4-7 until the amount of rooms has gone to zero