import {COLORS} from '../values/colors.js';
export const styles ={
  "sidebar": {
    "flex": "2",
    "height": "calc(100vh - 80px)",
    "overflowY": "scroll",
    "position": "sticky",
    "top": "50px",
    background: COLORS.backgroudColor,
  },
  "sidebarWrapper": {
    background: COLORS.backgroudColor,
    color: COLORS.textColor,
    "padding": "20px",
  },
    "rightbar": {
      "flex": "2",
      "color": COLORS.textColor,
      "backgroundColor": COLORS.backgroudColor
    },
    "rightbarWrapper": {
      "padding": "20px 20px 20px 20px"
    },
    "birthdayContainer": {
      "display": "flex",
      "alignItems": "center"
    },
    "birthdayImg": {    
      "width": "40px",
      "height": "40px",
      "marginRight": "10px"
    },
    "birthdayText": {
      "fontWeight": "300",
      "fontSize": "15px"
    },
    "rightbarAd": {
      "width": "100%",
      "borderRadius": "10px",
      "margin": "30px 0"
    },
    "rightbarTitle": {
      "fontSize": "18px",
      "fontWeight": "500",
      textTransform: 'uppercase',
      'fontWeight': 'bold',
      "margin": "30px 0px"
    },
    "rightbarFriendList": {
      "padding": "0",
      "margin": "0",
      "listStyle": "none"
    },
    "rightbarFriend": {
      "display": "flex",
      "alignItems": "center",
      "marginBottom": "15px"
    },
    "rightbarProfileImgContainer": {
      "marginRight": "10px",
      "position": "relative"
    },
    "rightbarProfileImg": {
      "width": "40px",
      "height": "40px",
      "borderRadius": "50%",
      "objectFit": "cover"
    },
    "rightbarOnline": {
      "width": "12px",
      "height": "12px",
      "borderRadius": "50%",
      "backgroundColor": "limegreen",
      "position": "absolute",
      "top": "-2px",
      "right": "0",
      "border": "2px solid #000000"
    },
    "rightbarUsername": {
      "fontWeight": "500"
    },
    "rightbarInfo": {
      "marginBottom": "30px"
    },
    "rightbarInfoItem": {
      "marginBottom": "10px"
    },
    "rightbarInfoKey": {
      "fontWeight": "500",
      "marginRight": "19px",
      letterSpacing: '.5px',
      "color": COLORS.textColor
    },
    "rightbarInfoValue": {
      "fontWeight": "300",
      "color": COLORS.textColor
    },
    "rightbarFollowings": {
      "display": "flex",
      "flexWrap": "wrap",
      "justifyContent": "space-between"
    },
    "rightbarFollowing": {
      "display": "flex",
      "flexDirection": "column",
      "marginBottom": "20px",
      "cursor": "pointer"
    },
    "rightbarFollowingImg": {
      "width": "100px",
      "height": "100px",
      "objectFit": "cover",
      "borderRadius": "10px",
      transition: 'all .3s ease',
      '&:hover': {
          transform: 'scale(0.9)'
      }
    },
    "rightbarFollowButton": {
      "marginTop": "30px",
      "marginBottom": "10px",
      "border": "1px solid #4379ed",
      "backgroundColor": COLORS.blueColor,
      transition: 'all .3s ease',
      textTransform: 'uppercase',
      "color": "#111",
      "borderRadius": "10px",
      "padding": "8px 25px",
      "display": "flex",
      "alignItems": "center",
      "fontSize": "16px",
      "fontWeight": "400",
      "cursor": "pointer",
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
          background: 'transparent',
          color: COLORS.textColor
      }
    },
    linkToFriendProfile: {
        textDecoration: "none", 
        color: COLORS.textColor, 
        textAlign: 'center',
    },
    rightbarFollowingName: {
        marginTop: '10px',
        textTransform: 'capitalize',
        letterSpacing: '.4px',
        fontSize: '16px',
        transition: 'all .3s ease',
        '&:hover': {
            color: COLORS.blueColor
        }
    }
  } 