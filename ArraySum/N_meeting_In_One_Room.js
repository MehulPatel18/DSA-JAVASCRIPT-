// N meetings In One Room | Greedy Algorithm

/*
     There is one meeting room in a firm. There are N meetings in the form of (start[i], end[i]) where start[i] is start time of meeting i and end[i] is finish time of meeting i.
     What is the maximum number of meetings that can be accommodated in the meeting room when only one meeting can be held in the meeting room at a particular time?

     Note: Start time of one chosen meeting can't be equal to the end time of the other chosen meeting.

     N = 6
     start[] = {1,3,0,5,8,5}
     end[] =  {2,4,6,7,9,9}
     Output: 4

     Explanation:
     Maximum four meetings can be held with
     given start and end timings.
     The meetings are - (1, 2),(3, 4), (5,7) and (8,9)
*/

function sortObject (obj, len) {
     for (let i = 1; i <= len; i++) {
          let j = i+1;
          while (j <= len) {
              if(obj[i][1] > obj[j][1]) {
                  temp = obj[i];
                  obj[i] = obj[j];
                  obj[j] = temp;
              }
              j++;
          }
     }
     console.log("sorted Object: ", obj);
     return obj;
}

function findMeetingSloatInNroom (start, finish, n) {
     let [obj, meetingPoint, meetingNo, totalMeetingTobeHeld] = [{}, Number.MIN_SAFE_INTEGER, [], 0];
     for (let i = 1; i <= n; i++) {
          obj[i] = [start[i-1], finish[i-1], i];
     }
     console.log("Meeting Sequence:> ");
     obj = sortObject(obj, n);

     for (let i = 1; i <= n; i++) {
          if(meetingPoint < obj[i][0]) {
               meetingNo.push(obj[i][2]);
               meetingPoint = obj[i][1];
               totalMeetingTobeHeld++;
          }
     }
     console.log("totalMeeting To be Held:> ", totalMeetingTobeHeld);
     return meetingNo;
}

let [start, finish, n] = [[1, 0, 3, 8, 5, 8], [2, 6, 4, 9, 7, 9], 6];
console.log("Possible Meeting No:> ", findMeetingSloatInNroom(start, finish, n));

//  node N_meeting_In_One_Room.js