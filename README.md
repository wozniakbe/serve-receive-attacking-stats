# MSOE Serve Receive

## Freehand notes from before
// Need PassService
// Make as PWA

// Reports
// -------------
// Team report
// - Get all passes between game number n and m (optional game number)
// - Add rating and divide by total number

// Player report
// - Get all passes where player = playerName

// Rotation report
// - Get all passes where rotation = n

// SUMMARY:
// Just have report page with dropdowns for game number start, game number end, player, and rotation
// Output passer rating and our attack % off the passes

// App design: tabs
// ----------------
// Tab one: input - need to select match before you begin
// First dialog is to select match from drop down, or create new if desired
// Use tutorial package to show a quick tutorial
// Never ending state machine of rotation, player, pass rating, attack outcome
// Button in the top right to "conclude match" and finish recording
// Button in the top left to view "Match in progress" stats that opens up the stat page but in the tab's context
// Button SOMEWHERE??? to substitute players (possibly hold on a player and it brings up list to sub from)
// TODO: Is this grid layout? How is it organized (for each selection portion)?

// Tab two: reporting
// Filter bar at top with the drop downs, and a Submit button
// By default displays each player's stats along with an aggregated "Team" row at the bottom
// Table is player name, # passes, passer rating, pass attack %

// Tab three: ??? maybe page where you create a match and add it to the list
// Create match: add opponent name, date, and select your players on the floor (I'll preload our team probably)
