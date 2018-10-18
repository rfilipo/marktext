const emojis = [
  {
    'emoji': '😀',
    'description': 'grinning face',
    'category': 'People',
    'aliases': [
      'grinning'
    ],
    'tags': [
      'smile',
      'happy'
    ]
  },
  {
    'emoji': '😃',
    'description': 'smiling face with open mouth',
    'category': 'People',
    'aliases': [
      'smiley'
    ],
    'tags': [
      'happy',
      'joy',
      'haha'
    ]
  },
  {
    'emoji': '😄',
    'description': 'smiling face with open mouth & smiling eyes',
    'category': 'People',
    'aliases': [
      'smile'
    ],
    'tags': [
      'happy',
      'joy',
      'laugh',
      'pleased'
    ]
  },
  {
    'emoji': '😁',
    'description': 'grinning face with smiling eyes',
    'category': 'People',
    'aliases': [
      'grin'
    ],
    'tags': []
  },
  {
    'emoji': '😆',
    'description': 'smiling face with open mouth & closed eyes',
    'category': 'People',
    'aliases': [
      'laughing',
      'satisfied'
    ],
    'tags': [
      'happy',
      'haha'
    ]
  },
  {
    'emoji': '😅',
    'description': 'smiling face with open mouth & cold sweat',
    'category': 'People',
    'aliases': [
      'sweat_smile'
    ],
    'tags': [
      'hot'
    ]
  },
  {
    'emoji': '😂',
    'description': 'face with tears of joy',
    'category': 'People',
    'aliases': [
      'joy'
    ],
    'tags': [
      'tears'
    ]
  },
  {
    'emoji': '🤣',
    'description': 'rolling on the floor laughing',
    'category': 'People',
    'aliases': [
      'rofl'
    ],
    'tags': [
      'lol',
      'laughing'
    ]
  },
  {
    'emoji': '☺️',
    'description': 'smiling face',
    'category': 'People',
    'aliases': [
      'relaxed'
    ],
    'tags': [
      'blush',
      'pleased'
    ]
  },
  {
    'emoji': '😊',
    'description': 'smiling face with smiling eyes',
    'category': 'People',
    'aliases': [
      'blush'
    ],
    'tags': [
      'proud'
    ]
  },
  {
    'emoji': '😇',
    'description': 'smiling face with halo',
    'category': 'People',
    'aliases': [
      'innocent'
    ],
    'tags': [
      'angel'
    ]
  },
  {
    'emoji': '🙂',
    'description': 'slightly smiling face',
    'category': 'People',
    'aliases': [
      'slightly_smiling_face'
    ],
    'tags': []
  },
  {
    'emoji': '🙃',
    'description': 'upside-down face',
    'category': 'People',
    'aliases': [
      'upside_down_face'
    ],
    'tags': []
  },
  {
    'emoji': '😉',
    'description': 'winking face',
    'category': 'People',
    'aliases': [
      'wink'
    ],
    'tags': [
      'flirt'
    ]
  },
  {
    'emoji': '😌',
    'description': 'relieved face',
    'category': 'People',
    'aliases': [
      'relieved'
    ],
    'tags': [
      'whew'
    ]
  },
  {
    'emoji': '😍',
    'description': 'smiling face with heart-eyes',
    'category': 'People',
    'aliases': [
      'heart_eyes'
    ],
    'tags': [
      'love',
      'crush'
    ]
  },
  {
    'emoji': '😘',
    'description': 'face blowing a kiss',
    'category': 'People',
    'aliases': [
      'kissing_heart'
    ],
    'tags': [
      'flirt'
    ]
  },
  {
    'emoji': '😗',
    'description': 'kissing face',
    'category': 'People',
    'aliases': [
      'kissing'
    ],
    'tags': []
  },
  {
    'emoji': '😙',
    'description': 'kissing face with smiling eyes',
    'category': 'People',
    'aliases': [
      'kissing_smiling_eyes'
    ],
    'tags': []
  },
  {
    'emoji': '😚',
    'description': 'kissing face with closed eyes',
    'category': 'People',
    'aliases': [
      'kissing_closed_eyes'
    ],
    'tags': []
  },
  {
    'emoji': '😋',
    'description': 'face savouring delicious food',
    'category': 'People',
    'aliases': [
      'yum'
    ],
    'tags': [
      'tongue',
      'lick'
    ]
  },
  {
    'emoji': '😜',
    'description': 'face with stuck-out tongue & winking eye',
    'category': 'People',
    'aliases': [
      'stuck_out_tongue_winking_eye'
    ],
    'tags': [
      'prank',
      'silly'
    ]
  },
  {
    'emoji': '😝',
    'description': 'face with stuck-out tongue & closed eyes',
    'category': 'People',
    'aliases': [
      'stuck_out_tongue_closed_eyes'
    ],
    'tags': [
      'prank'
    ]
  },
  {
    'emoji': '😛',
    'description': 'face with stuck-out tongue',
    'category': 'People',
    'aliases': [
      'stuck_out_tongue'
    ],
    'tags': []
  },
  {
    'emoji': '🤑',
    'description': 'money-mouth face',
    'category': 'People',
    'aliases': [
      'money_mouth_face'
    ],
    'tags': [
      'rich'
    ]
  },
  {
    'emoji': '🤗',
    'description': 'hugging face',
    'category': 'People',
    'aliases': [
      'hugs'
    ],
    'tags': []
  },
  {
    'emoji': '🤓',
    'description': 'nerd face',
    'category': 'People',
    'aliases': [
      'nerd_face'
    ],
    'tags': [
      'geek',
      'glasses'
    ]
  },
  {
    'emoji': '😎',
    'description': 'smiling face with sunglasses',
    'category': 'People',
    'aliases': [
      'sunglasses'
    ],
    'tags': [
      'cool'
    ]
  },
  {
    'emoji': '🤡',
    'description': 'clown face',
    'category': 'People',
    'aliases': [
      'clown_face'
    ],
    'tags': []
  },
  {
    'emoji': '🤠',
    'description': 'cowboy hat face',
    'category': 'People',
    'aliases': [
      'cowboy_hat_face'
    ],
    'tags': []
  },
  {
    'emoji': '😏',
    'description': 'smirking face',
    'category': 'People',
    'aliases': [
      'smirk'
    ],
    'tags': [
      'smug'
    ]
  },
  {
    'emoji': '😒',
    'description': 'unamused face',
    'category': 'People',
    'aliases': [
      'unamused'
    ],
    'tags': [
      'meh'
    ]
  },
  {
    'emoji': '😞',
    'description': 'disappointed face',
    'category': 'People',
    'aliases': [
      'disappointed'
    ],
    'tags': [
      'sad'
    ]
  },
  {
    'emoji': '😔',
    'description': 'pensive face',
    'category': 'People',
    'aliases': [
      'pensive'
    ],
    'tags': []
  },
  {
    'emoji': '😟',
    'description': 'worried face',
    'category': 'People',
    'aliases': [
      'worried'
    ],
    'tags': [
      'nervous'
    ]
  },
  {
    'emoji': '😕',
    'description': 'confused face',
    'category': 'People',
    'aliases': [
      'confused'
    ],
    'tags': []
  },
  {
    'emoji': '🙁',
    'description': 'slightly frowning face',
    'category': 'People',
    'aliases': [
      'slightly_frowning_face'
    ],
    'tags': []
  },
  {
    'emoji': '☹️',
    'description': 'frowning face',
    'category': 'People',
    'aliases': [
      'frowning_face'
    ],
    'tags': []
  },
  {
    'emoji': '😣',
    'description': 'persevering face',
    'category': 'People',
    'aliases': [
      'persevere'
    ],
    'tags': [
      'struggling'
    ]
  },
  {
    'emoji': '😖',
    'description': 'confounded face',
    'category': 'People',
    'aliases': [
      'confounded'
    ],
    'tags': []
  },
  {
    'emoji': '😫',
    'description': 'tired face',
    'category': 'People',
    'aliases': [
      'tired_face'
    ],
    'tags': [
      'upset',
      'whine'
    ]
  },
  {
    'emoji': '😩',
    'description': 'weary face',
    'category': 'People',
    'aliases': [
      'weary'
    ],
    'tags': [
      'tired'
    ]
  },
  {
    'emoji': '😤',
    'description': 'face with steam from nose',
    'category': 'People',
    'aliases': [
      'triumph'
    ],
    'tags': [
      'smug'
    ]
  },
  {
    'emoji': '😠',
    'description': 'angry face',
    'category': 'People',
    'aliases': [
      'angry'
    ],
    'tags': [
      'mad',
      'annoyed'
    ]
  },
  {
    'emoji': '😡',
    'description': 'pouting face',
    'category': 'People',
    'aliases': [
      'rage',
      'pout'
    ],
    'tags': [
      'angry'
    ]
  },
  {
    'emoji': '😶',
    'description': 'face without mouth',
    'category': 'People',
    'aliases': [
      'no_mouth'
    ],
    'tags': [
      'mute',
      'silence'
    ]
  },
  {
    'emoji': '😐',
    'description': 'neutral face',
    'category': 'People',
    'aliases': [
      'neutral_face'
    ],
    'tags': [
      'meh'
    ]
  },
  {
    'emoji': '😑',
    'description': 'expressionless face',
    'category': 'People',
    'aliases': [
      'expressionless'
    ],
    'tags': []
  },
  {
    'emoji': '😯',
    'description': 'hushed face',
    'category': 'People',
    'aliases': [
      'hushed'
    ],
    'tags': [
      'silence',
      'speechless'
    ]
  },
  {
    'emoji': '😦',
    'description': 'frowning face with open mouth',
    'category': 'People',
    'aliases': [
      'frowning'
    ],
    'tags': []
  },
  {
    'emoji': '😧',
    'description': 'anguished face',
    'category': 'People',
    'aliases': [
      'anguished'
    ],
    'tags': [
      'stunned'
    ]
  },
  {
    'emoji': '😮',
    'description': 'face with open mouth',
    'category': 'People',
    'aliases': [
      'open_mouth'
    ],
    'tags': [
      'surprise',
      'impressed',
      'wow'
    ]
  },
  {
    'emoji': '😲',
    'description': 'astonished face',
    'category': 'People',
    'aliases': [
      'astonished'
    ],
    'tags': [
      'amazed',
      'gasp'
    ]
  },
  {
    'emoji': '😵',
    'description': 'dizzy face',
    'category': 'People',
    'aliases': [
      'dizzy_face'
    ],
    'tags': []
  },
  {
    'emoji': '😳',
    'description': 'flushed face',
    'category': 'People',
    'aliases': [
      'flushed'
    ],
    'tags': []
  },
  {
    'emoji': '😱',
    'description': 'face screaming in fear',
    'category': 'People',
    'aliases': [
      'scream'
    ],
    'tags': [
      'horror',
      'shocked'
    ]
  },
  {
    'emoji': '😨',
    'description': 'fearful face',
    'category': 'People',
    'aliases': [
      'fearful'
    ],
    'tags': [
      'scared',
      'shocked',
      'oops'
    ]
  },
  {
    'emoji': '😰',
    'description': 'face with open mouth & cold sweat',
    'category': 'People',
    'aliases': [
      'cold_sweat'
    ],
    'tags': [
      'nervous'
    ]
  },
  {
    'emoji': '😢',
    'description': 'crying face',
    'category': 'People',
    'aliases': [
      'cry'
    ],
    'tags': [
      'sad',
      'tear'
    ]
  },
  {
    'emoji': '😥',
    'description': 'disappointed but relieved face',
    'category': 'People',
    'aliases': [
      'disappointed_relieved'
    ],
    'tags': [
      'phew',
      'sweat',
      'nervous'
    ]
  },
  {
    'emoji': '🤤',
    'description': 'drooling face',
    'category': 'People',
    'aliases': [
      'drooling_face'
    ],
    'tags': []
  },
  {
    'emoji': '😭',
    'description': 'loudly crying face',
    'category': 'People',
    'aliases': [
      'sob'
    ],
    'tags': [
      'sad',
      'cry',
      'bawling'
    ]
  },
  {
    'emoji': '😓',
    'description': 'face with cold sweat',
    'category': 'People',
    'aliases': [
      'sweat'
    ],
    'tags': []
  },
  {
    'emoji': '😪',
    'description': 'sleepy face',
    'category': 'People',
    'aliases': [
      'sleepy'
    ],
    'tags': [
      'tired'
    ]
  },
  {
    'emoji': '😴',
    'description': 'sleeping face',
    'category': 'People',
    'aliases': [
      'sleeping'
    ],
    'tags': [
      'zzz'
    ]
  },
  {
    'emoji': '🙄',
    'description': 'face with rolling eyes',
    'category': 'People',
    'aliases': [
      'roll_eyes'
    ],
    'tags': []
  },
  {
    'emoji': '🤔',
    'description': 'thinking face',
    'category': 'People',
    'aliases': [
      'thinking'
    ],
    'tags': []
  },
  {
    'emoji': '🤥',
    'description': 'lying face',
    'category': 'People',
    'aliases': [
      'lying_face'
    ],
    'tags': [
      'liar'
    ]
  },
  {
    'emoji': '😬',
    'description': 'grimacing face',
    'category': 'People',
    'aliases': [
      'grimacing'
    ],
    'tags': []
  },
  {
    'emoji': '🤐',
    'description': 'zipper-mouth face',
    'category': 'People',
    'aliases': [
      'zipper_mouth_face'
    ],
    'tags': [
      'silence',
      'hush'
    ]
  },
  {
    'emoji': '🤢',
    'description': 'nauseated face',
    'category': 'People',
    'aliases': [
      'nauseated_face'
    ],
    'tags': [
      'sick',
      'barf',
      'disgusted'
    ]
  },
  {
    'emoji': '🤧',
    'description': 'sneezing face',
    'category': 'People',
    'aliases': [
      'sneezing_face'
    ],
    'tags': [
      'achoo',
      'sick'
    ]
  },
  {
    'emoji': '😷',
    'description': 'face with medical mask',
    'category': 'People',
    'aliases': [
      'mask'
    ],
    'tags': [
      'sick',
      'ill'
    ]
  },
  {
    'emoji': '🤒',
    'description': 'face with thermometer',
    'category': 'People',
    'aliases': [
      'face_with_thermometer'
    ],
    'tags': [
      'sick'
    ]
  },
  {
    'emoji': '🤕',
    'description': 'face with head-bandage',
    'category': 'People',
    'aliases': [
      'face_with_head_bandage'
    ],
    'tags': [
      'hurt'
    ]
  },
  {
    'emoji': '😈',
    'description': 'smiling face with horns',
    'category': 'People',
    'aliases': [
      'smiling_imp'
    ],
    'tags': [
      'devil',
      'evil',
      'horns'
    ]
  },
  {
    'emoji': '👿',
    'description': 'angry face with horns',
    'category': 'People',
    'aliases': [
      'imp'
    ],
    'tags': [
      'angry',
      'devil',
      'evil',
      'horns'
    ]
  },
  {
    'emoji': '👹',
    'description': 'ogre',
    'category': 'People',
    'aliases': [
      'japanese_ogre'
    ],
    'tags': [
      'monster'
    ]
  },
  {
    'emoji': '👺',
    'description': 'goblin',
    'category': 'People',
    'aliases': [
      'japanese_goblin'
    ],
    'tags': []
  },
  {
    'emoji': '💩',
    'description': 'pile of poo',
    'category': 'People',
    'aliases': [
      'hankey',
      'poop',
      'shit'
    ],
    'tags': [
      'crap'
    ]
  },
  {
    'emoji': '👻',
    'description': 'ghost',
    'category': 'People',
    'aliases': [
      'ghost'
    ],
    'tags': [
      'halloween'
    ]
  },
  {
    'emoji': '💀',
    'description': 'skull',
    'category': 'People',
    'aliases': [
      'skull'
    ],
    'tags': [
      'dead',
      'danger',
      'poison'
    ]
  },
  {
    'emoji': '☠️',
    'description': 'skull and crossbones',
    'category': 'People',
    'aliases': [
      'skull_and_crossbones'
    ],
    'tags': [
      'danger',
      'pirate'
    ]
  },
  {
    'emoji': '👽',
    'description': 'alien',
    'category': 'People',
    'aliases': [
      'alien'
    ],
    'tags': [
      'ufo'
    ]
  },
  {
    'emoji': '👾',
    'description': 'alien monster',
    'category': 'People',
    'aliases': [
      'space_invader'
    ],
    'tags': [
      'game',
      'retro'
    ]
  },
  {
    'emoji': '🤖',
    'description': 'robot face',
    'category': 'People',
    'aliases': [
      'robot'
    ],
    'tags': []
  },
  {
    'emoji': '🎃',
    'description': 'jack-o-lantern',
    'category': 'People',
    'aliases': [
      'jack_o_lantern'
    ],
    'tags': [
      'halloween'
    ]
  },
  {
    'emoji': '😺',
    'description': 'smiling cat face with open mouth',
    'category': 'People',
    'aliases': [
      'smiley_cat'
    ],
    'tags': []
  },
  {
    'emoji': '😸',
    'description': 'grinning cat face with smiling eyes',
    'category': 'People',
    'aliases': [
      'smile_cat'
    ],
    'tags': []
  },
  {
    'emoji': '😹',
    'description': 'cat face with tears of joy',
    'category': 'People',
    'aliases': [
      'joy_cat'
    ],
    'tags': []
  },
  {
    'emoji': '😻',
    'description': 'smiling cat face with heart-eyes',
    'category': 'People',
    'aliases': [
      'heart_eyes_cat'
    ],
    'tags': []
  },
  {
    'emoji': '😼',
    'description': 'cat face with wry smile',
    'category': 'People',
    'aliases': [
      'smirk_cat'
    ],
    'tags': []
  },
  {
    'emoji': '😽',
    'description': 'kissing cat face with closed eyes',
    'category': 'People',
    'aliases': [
      'kissing_cat'
    ],
    'tags': []
  },
  {
    'emoji': '🙀',
    'description': 'weary cat face',
    'category': 'People',
    'aliases': [
      'scream_cat'
    ],
    'tags': [
      'horror'
    ]
  },
  {
    'emoji': '😿',
    'description': 'crying cat face',
    'category': 'People',
    'aliases': [
      'crying_cat_face'
    ],
    'tags': [
      'sad',
      'tear'
    ]
  },
  {
    'emoji': '😾',
    'description': 'pouting cat face',
    'category': 'People',
    'aliases': [
      'pouting_cat'
    ],
    'tags': []
  },
  {
    'emoji': '👐',
    'description': 'open hands',
    'category': 'People',
    'aliases': [
      'open_hands'
    ],
    'tags': []
  },
  {
    'emoji': '🙌',
    'description': 'raising hands',
    'category': 'People',
    'aliases': [
      'raised_hands'
    ],
    'tags': [
      'hooray'
    ]
  },
  {
    'emoji': '👏',
    'description': 'clapping hands',
    'category': 'People',
    'aliases': [
      'clap'
    ],
    'tags': [
      'praise',
      'applause'
    ]
  },
  {
    'emoji': '🙏',
    'description': 'folded hands',
    'category': 'People',
    'aliases': [
      'pray'
    ],
    'tags': [
      'please',
      'hope',
      'wish'
    ]
  },
  {
    'emoji': '🤝',
    'description': 'handshake',
    'category': 'People',
    'aliases': [
      'handshake'
    ],
    'tags': [
      'deal'
    ]
  },
  {
    'emoji': '👍',
    'description': 'thumbs up',
    'category': 'People',
    'aliases': [
      '+1',
      'thumbsup'
    ],
    'tags': [
      'approve',
      'ok'
    ]
  },
  {
    'emoji': '👎',
    'description': 'thumbs down',
    'category': 'People',
    'aliases': [
      '-1',
      'thumbsdown'
    ],
    'tags': [
      'disapprove',
      'bury'
    ]
  },
  {
    'emoji': '👊',
    'description': 'oncoming fist',
    'category': 'People',
    'aliases': [
      'fist_oncoming',
      'facepunch',
      'punch'
    ],
    'tags': [
      'attack'
    ]
  },
  {
    'emoji': '✊',
    'description': 'raised fist',
    'category': 'People',
    'aliases': [
      'fist_raised',
      'fist'
    ],
    'tags': [
      'power'
    ]
  },
  {
    'emoji': '🤛',
    'description': 'left-facing fist',
    'category': 'People',
    'aliases': [
      'fist_left'
    ],
    'tags': []
  },
  {
    'emoji': '🤜',
    'description': 'right-facing fist',
    'category': 'People',
    'aliases': [
      'fist_right'
    ],
    'tags': []
  },
  {
    'emoji': '🤞',
    'description': 'crossed fingers',
    'category': 'People',
    'aliases': [
      'crossed_fingers'
    ],
    'tags': [
      'luck',
      'hopeful'
    ]
  },
  {
    'emoji': '✌️',
    'description': 'victory hand',
    'category': 'People',
    'aliases': [
      'v'
    ],
    'tags': [
      'victory',
      'peace'
    ]
  },
  {
    'emoji': '🤘',
    'description': 'sign of the horns',
    'category': 'People',
    'aliases': [
      'metal'
    ],
    'tags': []
  },
  {
    'emoji': '👌',
    'description': 'OK hand',
    'category': 'People',
    'aliases': [
      'ok_hand'
    ],
    'tags': []
  },
  {
    'emoji': '👈',
    'description': 'backhand index pointing left',
    'category': 'People',
    'aliases': [
      'point_left'
    ],
    'tags': []
  },
  {
    'emoji': '👉',
    'description': 'backhand index pointing right',
    'category': 'People',
    'aliases': [
      'point_right'
    ],
    'tags': []
  },
  {
    'emoji': '👆',
    'description': 'backhand index pointing up',
    'category': 'People',
    'aliases': [
      'point_up_2'
    ],
    'tags': []
  },
  {
    'emoji': '👇',
    'description': 'backhand index pointing down',
    'category': 'People',
    'aliases': [
      'point_down'
    ],
    'tags': []
  },
  {
    'emoji': '☝️',
    'description': 'index pointing up',
    'category': 'People',
    'aliases': [
      'point_up'
    ],
    'tags': []
  },
  {
    'emoji': '✋',
    'description': 'raised hand',
    'category': 'People',
    'aliases': [
      'hand',
      'raised_hand'
    ],
    'tags': [
      'highfive',
      'stop'
    ]
  },
  {
    'emoji': '🤚',
    'description': 'raised back of hand',
    'category': 'People',
    'aliases': [
      'raised_back_of_hand'
    ],
    'tags': []
  },
  {
    'emoji': '🖐',
    'description': 'raised hand with fingers splayed',
    'category': 'People',
    'aliases': [
      'raised_hand_with_fingers_splayed'
    ],
    'tags': []
  },
  {
    'emoji': '🖖',
    'description': 'vulcan salute',
    'category': 'People',
    'aliases': [
      'vulcan_salute'
    ],
    'tags': [
      'prosper',
      'spock'
    ]
  },
  {
    'emoji': '👋',
    'description': 'waving hand',
    'category': 'People',
    'aliases': [
      'wave'
    ],
    'tags': [
      'goodbye'
    ]
  },
  {
    'emoji': '🤙',
    'description': 'call me hand',
    'category': 'People',
    'aliases': [
      'call_me_hand'
    ],
    'tags': []
  },
  {
    'emoji': '💪',
    'description': 'flexed biceps',
    'category': 'People',
    'aliases': [
      'muscle'
    ],
    'tags': [
      'flex',
      'bicep',
      'strong',
      'workout'
    ]
  },
  {
    'emoji': '🖕',
    'description': 'middle finger',
    'category': 'People',
    'aliases': [
      'middle_finger',
      'fu'
    ],
    'tags': []
  },
  {
    'emoji': '✍️',
    'description': 'writing hand',
    'category': 'People',
    'aliases': [
      'writing_hand'
    ],
    'tags': []
  },
  {
    'emoji': '🤳',
    'description': 'selfie',
    'category': 'People',
    'aliases': [
      'selfie'
    ],
    'tags': []
  },
  {
    'emoji': '💅',
    'description': 'nail polish',
    'category': 'People',
    'aliases': [
      'nail_care'
    ],
    'tags': [
      'beauty',
      'manicure'
    ]
  },
  {
    'emoji': '💍',
    'description': 'ring',
    'category': 'People',
    'aliases': [
      'ring'
    ],
    'tags': [
      'wedding',
      'marriage',
      'engaged'
    ]
  },
  {
    'emoji': '💄',
    'description': 'lipstick',
    'category': 'People',
    'aliases': [
      'lipstick'
    ],
    'tags': [
      'makeup'
    ]
  },
  {
    'emoji': '💋',
    'description': 'kiss mark',
    'category': 'People',
    'aliases': [
      'kiss'
    ],
    'tags': [
      'lipstick'
    ]
  },
  {
    'emoji': '👄',
    'description': 'mouth',
    'category': 'People',
    'aliases': [
      'lips'
    ],
    'tags': [
      'kiss'
    ]
  },
  {
    'emoji': '👅',
    'description': 'tongue',
    'category': 'People',
    'aliases': [
      'tongue'
    ],
    'tags': [
      'taste'
    ]
  },
  {
    'emoji': '👂',
    'description': 'ear',
    'category': 'People',
    'aliases': [
      'ear'
    ],
    'tags': [
      'hear',
      'sound',
      'listen'
    ]
  },
  {
    'emoji': '👃',
    'description': 'nose',
    'category': 'People',
    'aliases': [
      'nose'
    ],
    'tags': [
      'smell'
    ]
  },
  {
    'emoji': '👣',
    'description': 'footprints',
    'category': 'People',
    'aliases': [
      'footprints'
    ],
    'tags': [
      'feet',
      'tracks'
    ]
  },
  {
    'emoji': '👁',
    'description': 'eye',
    'category': 'People',
    'aliases': [
      'eye'
    ],
    'tags': []
  },
  {
    'emoji': '👀',
    'description': 'eyes',
    'category': 'People',
    'aliases': [
      'eyes'
    ],
    'tags': [
      'look',
      'see',
      'watch'
    ]
  },
  {
    'emoji': '🗣',
    'description': 'speaking head',
    'category': 'People',
    'aliases': [
      'speaking_head'
    ],
    'tags': []
  },
  {
    'emoji': '👤',
    'description': 'bust in silhouette',
    'category': 'People',
    'aliases': [
      'bust_in_silhouette'
    ],
    'tags': [
      'user'
    ]
  },
  {
    'emoji': '👥',
    'description': 'busts in silhouette',
    'category': 'People',
    'aliases': [
      'busts_in_silhouette'
    ],
    'tags': [
      'users',
      'group',
      'team'
    ]
  },
  {
    'emoji': '👶',
    'description': 'baby',
    'category': 'People',
    'aliases': [
      'baby'
    ],
    'tags': [
      'child',
      'newborn'
    ]
  },
  {
    'emoji': '👦',
    'description': 'boy',
    'category': 'People',
    'aliases': [
      'boy'
    ],
    'tags': [
      'child'
    ]
  },
  {
    'emoji': '👧',
    'description': 'girl',
    'category': 'People',
    'aliases': [
      'girl'
    ],
    'tags': [
      'child'
    ]
  },
  {
    'emoji': '👨',
    'description': 'man',
    'category': 'People',
    'aliases': [
      'man'
    ],
    'tags': [
      'mustache',
      'father',
      'dad'
    ]
  },
  {
    'emoji': '👩',
    'description': 'woman',
    'category': 'People',
    'aliases': [
      'woman'
    ],
    'tags': [
      'girls'
    ]
  },
  {
    'emoji': '👱‍♀',
    'description': 'blond-haired woman',
    'category': 'People',
    'aliases': [
      'blonde_woman'
    ],
    'tags': []
  },
  {
    'emoji': '👱',
    'description': 'blond-haired person',
    'category': 'People',
    'aliases': [
      'blonde_man',
      'person_with_blond_hair'
    ],
    'tags': [
      'boy'
    ]
  },
  {
    'emoji': '👴',
    'description': 'old man',
    'category': 'People',
    'aliases': [
      'older_man'
    ],
    'tags': []
  },
  {
    'emoji': '👵',
    'description': 'old woman',
    'category': 'People',
    'aliases': [
      'older_woman'
    ],
    'tags': []
  },
  {
    'emoji': '👲',
    'description': 'man with Chinese cap',
    'category': 'People',
    'aliases': [
      'man_with_gua_pi_mao'
    ],
    'tags': []
  },
  {
    'emoji': '👳‍♀',
    'description': 'woman wearing turban',
    'category': 'People',
    'aliases': [
      'woman_with_turban'
    ],
    'tags': []
  },
  {
    'emoji': '👳',
    'description': 'person wearing turban',
    'category': 'People',
    'aliases': [
      'man_with_turban'
    ],
    'tags': []
  },
  {
    'emoji': '👮‍♀',
    'description': 'woman police officer',
    'category': 'People',
    'aliases': [
      'policewoman'
    ],
    'tags': []
  },
  {
    'emoji': '👮',
    'description': 'police officer',
    'category': 'People',
    'aliases': [
      'policeman',
      'cop'
    ],
    'tags': [
      'police',
      'law'
    ]
  },
  {
    'emoji': '👷‍♀',
    'description': 'woman construction worker',
    'category': 'People',
    'aliases': [
      'construction_worker_woman'
    ],
    'tags': []
  },
  {
    'emoji': '👷',
    'description': 'construction worker',
    'category': 'People',
    'aliases': [
      'construction_worker_man',
      'construction_worker'
    ],
    'tags': [
      'helmet'
    ]
  },
  {
    'emoji': '💂‍♀',
    'description': 'woman guard',
    'category': 'People',
    'aliases': [
      'guardswoman'
    ],
    'tags': []
  },
  {
    'emoji': '💂',
    'description': 'guard',
    'category': 'People',
    'aliases': [
      'guardsman'
    ],
    'tags': []
  },
  {
    'emoji': '🕵️‍♀️',
    'description': 'woman detective',
    'category': 'People',
    'aliases': [
      'female_detective'
    ],
    'tags': [
      'sleuth'
    ]
  },
  {
    'emoji': '🕵',
    'description': 'detective',
    'category': 'People',
    'aliases': [
      'male_detective',
      'detective'
    ],
    'tags': [
      'sleuth'
    ]
  },
  {
    'emoji': '👩‍⚕',
    'description': 'woman health worker',
    'category': 'People',
    'aliases': [
      'woman_health_worker'
    ],
    'tags': [
      'doctor',
      'nurse'
    ]
  },
  {
    'emoji': '👨‍⚕',
    'description': 'man health worker',
    'category': 'People',
    'aliases': [
      'man_health_worker'
    ],
    'tags': [
      'doctor',
      'nurse'
    ]
  },
  {
    'emoji': '👩‍🌾',
    'description': 'woman farmer',
    'category': 'People',
    'aliases': [
      'woman_farmer'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍🌾',
    'description': 'man farmer',
    'category': 'People',
    'aliases': [
      'man_farmer'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍🍳',
    'description': 'woman cook',
    'category': 'People',
    'aliases': [
      'woman_cook'
    ],
    'tags': [
      'chef'
    ]
  },
  {
    'emoji': '👨‍🍳',
    'description': 'man cook',
    'category': 'People',
    'aliases': [
      'man_cook'
    ],
    'tags': [
      'chef'
    ]
  },
  {
    'emoji': '👩‍🎓',
    'description': 'woman student',
    'category': 'People',
    'aliases': [
      'woman_student'
    ],
    'tags': [
      'graduation'
    ]
  },
  {
    'emoji': '👨‍🎓',
    'description': 'man student',
    'category': 'People',
    'aliases': [
      'man_student'
    ],
    'tags': [
      'graduation'
    ]
  },
  {
    'emoji': '👩‍🎤',
    'description': 'woman singer',
    'category': 'People',
    'aliases': [
      'woman_singer'
    ],
    'tags': [
      'rockstar'
    ]
  },
  {
    'emoji': '👨‍🎤',
    'description': 'man singer',
    'category': 'People',
    'aliases': [
      'man_singer'
    ],
    'tags': [
      'rockstar'
    ]
  },
  {
    'emoji': '👩‍🏫',
    'description': 'woman teacher',
    'category': 'People',
    'aliases': [
      'woman_teacher'
    ],
    'tags': [
      'school',
      'professor'
    ]
  },
  {
    'emoji': '👨‍🏫',
    'description': 'man teacher',
    'category': 'People',
    'aliases': [
      'man_teacher'
    ],
    'tags': [
      'school',
      'professor'
    ]
  },
  {
    'emoji': '👩‍🏭',
    'description': 'woman factory worker',
    'category': 'People',
    'aliases': [
      'woman_factory_worker'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍🏭',
    'description': 'man factory worker',
    'category': 'People',
    'aliases': [
      'man_factory_worker'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍💻',
    'description': 'woman technologist',
    'category': 'People',
    'aliases': [
      'woman_technologist'
    ],
    'tags': [
      'coder'
    ]
  },
  {
    'emoji': '👨‍💻',
    'description': 'man technologist',
    'category': 'People',
    'aliases': [
      'man_technologist'
    ],
    'tags': [
      'coder'
    ]
  },
  {
    'emoji': '👩‍💼',
    'description': 'woman office worker',
    'category': 'People',
    'aliases': [
      'woman_office_worker'
    ],
    'tags': [
      'business'
    ]
  },
  {
    'emoji': '👨‍💼',
    'description': 'man office worker',
    'category': 'People',
    'aliases': [
      'man_office_worker'
    ],
    'tags': [
      'business'
    ]
  },
  {
    'emoji': '👩‍🔧',
    'description': 'woman mechanic',
    'category': 'People',
    'aliases': [
      'woman_mechanic'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍🔧',
    'description': 'man mechanic',
    'category': 'People',
    'aliases': [
      'man_mechanic'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍🔬',
    'description': 'woman scientist',
    'category': 'People',
    'aliases': [
      'woman_scientist'
    ],
    'tags': [
      'research'
    ]
  },
  {
    'emoji': '👨‍🔬',
    'description': 'man scientist',
    'category': 'People',
    'aliases': [
      'man_scientist'
    ],
    'tags': [
      'research'
    ]
  },
  {
    'emoji': '👩‍🎨',
    'description': 'woman artist',
    'category': 'People',
    'aliases': [
      'woman_artist'
    ],
    'tags': [
      'painter'
    ]
  },
  {
    'emoji': '👨‍🎨',
    'description': 'man artist',
    'category': 'People',
    'aliases': [
      'man_artist'
    ],
    'tags': [
      'painter'
    ]
  },
  {
    'emoji': '👩‍🚒',
    'description': 'woman firefighter',
    'category': 'People',
    'aliases': [
      'woman_firefighter'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍🚒',
    'description': 'man firefighter',
    'category': 'People',
    'aliases': [
      'man_firefighter'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍✈',
    'description': 'woman pilot',
    'category': 'People',
    'aliases': [
      'woman_pilot'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍✈',
    'description': 'man pilot',
    'category': 'People',
    'aliases': [
      'man_pilot'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍🚀',
    'description': 'woman astronaut',
    'category': 'People',
    'aliases': [
      'woman_astronaut'
    ],
    'tags': [
      'space'
    ]
  },
  {
    'emoji': '👨‍🚀',
    'description': 'man astronaut',
    'category': 'People',
    'aliases': [
      'man_astronaut'
    ],
    'tags': [
      'space'
    ]
  },
  {
    'emoji': '👩‍⚖',
    'description': 'woman judge',
    'category': 'People',
    'aliases': [
      'woman_judge'
    ],
    'tags': [
      'justice'
    ]
  },
  {
    'emoji': '👨‍⚖',
    'description': 'man judge',
    'category': 'People',
    'aliases': [
      'man_judge'
    ],
    'tags': [
      'justice'
    ]
  },
  {
    'emoji': '🤶',
    'description': 'Mrs. Claus',
    'category': 'People',
    'aliases': [
      'mrs_claus'
    ],
    'tags': [
      'santa'
    ]
  },
  {
    'emoji': '🎅',
    'description': 'Santa Claus',
    'category': 'People',
    'aliases': [
      'santa'
    ],
    'tags': [
      'christmas'
    ]
  },
  {
    'emoji': '👸',
    'description': 'princess',
    'category': 'People',
    'aliases': [
      'princess'
    ],
    'tags': [
      'blonde',
      'crown',
      'royal'
    ]
  },
  {
    'emoji': '🤴',
    'description': 'prince',
    'category': 'People',
    'aliases': [
      'prince'
    ],
    'tags': [
      'crown',
      'royal'
    ]
  },
  {
    'emoji': '👰',
    'description': 'bride with veil',
    'category': 'People',
    'aliases': [
      'bride_with_veil'
    ],
    'tags': [
      'marriage',
      'wedding'
    ]
  },
  {
    'emoji': '🤵',
    'description': 'man in tuxedo',
    'category': 'People',
    'aliases': [
      'man_in_tuxedo'
    ],
    'tags': [
      'groom',
      'marriage',
      'wedding'
    ]
  },
  {
    'emoji': '👼',
    'description': 'baby angel',
    'category': 'People',
    'aliases': [
      'angel'
    ],
    'tags': []
  },
  {
    'emoji': '🤰',
    'description': 'pregnant woman',
    'category': 'People',
    'aliases': [
      'pregnant_woman'
    ],
    'tags': []
  },
  {
    'emoji': '🙇‍♀',
    'description': 'woman bowing',
    'category': 'People',
    'aliases': [
      'bowing_woman'
    ],
    'tags': [
      'respect',
      'thanks'
    ]
  },
  {
    'emoji': '🙇',
    'description': 'person bowing',
    'category': 'People',
    'aliases': [
      'bowing_man',
      'bow'
    ],
    'tags': [
      'respect',
      'thanks'
    ]
  },
  {
    'emoji': '💁',
    'description': 'person tipping hand',
    'category': 'People',
    'aliases': [
      'tipping_hand_woman',
      'information_desk_person',
      'sassy_woman'
    ],
    'tags': []
  },
  {
    'emoji': '💁‍♂',
    'description': 'man tipping hand',
    'category': 'People',
    'aliases': [
      'tipping_hand_man',
      'sassy_man'
    ],
    'tags': [
      'information'
    ]
  },
  {
    'emoji': '🙅',
    'description': 'person gesturing NO',
    'category': 'People',
    'aliases': [
      'no_good_woman',
      'no_good',
      'ng_woman'
    ],
    'tags': [
      'stop',
      'halt'
    ]
  },
  {
    'emoji': '🙅‍♂',
    'description': 'man gesturing NO',
    'category': 'People',
    'aliases': [
      'no_good_man',
      'ng_man'
    ],
    'tags': [
      'stop',
      'halt'
    ]
  },
  {
    'emoji': '🙆',
    'description': 'person gesturing OK',
    'category': 'People',
    'aliases': [
      'ok_woman'
    ],
    'tags': []
  },
  {
    'emoji': '🙆‍♂',
    'description': 'man gesturing OK',
    'category': 'People',
    'aliases': [
      'ok_man'
    ],
    'tags': []
  },
  {
    'emoji': '🙋',
    'description': 'person raising hand',
    'category': 'People',
    'aliases': [
      'raising_hand_woman',
      'raising_hand'
    ],
    'tags': []
  },
  {
    'emoji': '🙋‍♂',
    'description': 'man raising hand',
    'category': 'People',
    'aliases': [
      'raising_hand_man'
    ],
    'tags': []
  },
  {
    'emoji': '🤦‍♀',
    'description': 'woman facepalming',
    'category': 'People',
    'aliases': [
      'woman_facepalming'
    ],
    'tags': []
  },
  {
    'emoji': '🤦‍♂',
    'description': 'man facepalming',
    'category': 'People',
    'aliases': [
      'man_facepalming'
    ],
    'tags': []
  },
  {
    'emoji': '🤷‍♀',
    'description': 'woman shrugging',
    'category': 'People',
    'aliases': [
      'woman_shrugging'
    ],
    'tags': []
  },
  {
    'emoji': '🤷‍♂',
    'description': 'man shrugging',
    'category': 'People',
    'aliases': [
      'man_shrugging'
    ],
    'tags': []
  },
  {
    'emoji': '🙎',
    'description': 'person pouting',
    'category': 'People',
    'aliases': [
      'pouting_woman',
      'person_with_pouting_face'
    ],
    'tags': []
  },
  {
    'emoji': '🙎‍♂',
    'description': 'man pouting',
    'category': 'People',
    'aliases': [
      'pouting_man'
    ],
    'tags': []
  },
  {
    'emoji': '🙍',
    'description': 'person frowning',
    'category': 'People',
    'aliases': [
      'frowning_woman',
      'person_frowning'
    ],
    'tags': [
      'sad'
    ]
  },
  {
    'emoji': '🙍‍♂',
    'description': 'man frowning',
    'category': 'People',
    'aliases': [
      'frowning_man'
    ],
    'tags': []
  },
  {
    'emoji': '💇',
    'description': 'person getting haircut',
    'category': 'People',
    'aliases': [
      'haircut_woman',
      'haircut'
    ],
    'tags': [
      'beauty'
    ]
  },
  {
    'emoji': '💇‍♂',
    'description': 'man getting haircut',
    'category': 'People',
    'aliases': [
      'haircut_man'
    ],
    'tags': []
  },
  {
    'emoji': '💆',
    'description': 'person getting massage',
    'category': 'People',
    'aliases': [
      'massage_woman',
      'massage'
    ],
    'tags': [
      'spa'
    ]
  },
  {
    'emoji': '💆‍♂',
    'description': 'man getting massage',
    'category': 'People',
    'aliases': [
      'massage_man'
    ],
    'tags': [
      'spa'
    ]
  },
  {
    'emoji': '🕴',
    'description': 'man in business suit levitating',
    'category': 'People',
    'aliases': [
      'business_suit_levitating'
    ],
    'tags': []
  },
  {
    'emoji': '💃',
    'description': 'woman dancing',
    'category': 'People',
    'aliases': [
      'dancer'
    ],
    'tags': [
      'dress'
    ]
  },
  {
    'emoji': '🕺',
    'description': 'man dancing',
    'category': 'People',
    'aliases': [
      'man_dancing'
    ],
    'tags': [
      'dancer'
    ]
  },
  {
    'emoji': '👯',
    'description': 'people with bunny ears partying',
    'category': 'People',
    'aliases': [
      'dancing_women',
      'dancers'
    ],
    'tags': [
      'bunny'
    ]
  },
  {
    'emoji': '👯‍♂',
    'description': 'men with bunny ears partying',
    'category': 'People',
    'aliases': [
      'dancing_men'
    ],
    'tags': [
      'bunny'
    ]
  },
  {
    'emoji': '🚶‍♀',
    'description': 'woman walking',
    'category': 'People',
    'aliases': [
      'walking_woman'
    ],
    'tags': []
  },
  {
    'emoji': '🚶',
    'description': 'person walking',
    'category': 'People',
    'aliases': [
      'walking_man',
      'walking'
    ],
    'tags': []
  },
  {
    'emoji': '🏃‍♀',
    'description': 'woman running',
    'category': 'People',
    'aliases': [
      'running_woman'
    ],
    'tags': [
      'exercise',
      'workout',
      'marathon'
    ]
  },
  {
    'emoji': '🏃',
    'description': 'person running',
    'category': 'People',
    'aliases': [
      'running_man',
      'runner',
      'running'
    ],
    'tags': [
      'exercise',
      'workout',
      'marathon'
    ]
  },
  {
    'emoji': '👫',
    'description': 'man and woman holding hands',
    'category': 'People',
    'aliases': [
      'couple'
    ],
    'tags': [
      'date'
    ]
  },
  {
    'emoji': '👭',
    'description': 'two women holding hands',
    'category': 'People',
    'aliases': [
      'two_women_holding_hands'
    ],
    'tags': [
      'couple',
      'date'
    ]
  },
  {
    'emoji': '👬',
    'description': 'two men holding hands',
    'category': 'People',
    'aliases': [
      'two_men_holding_hands'
    ],
    'tags': [
      'couple',
      'date'
    ]
  },
  {
    'emoji': '💑',
    'description': 'couple with heart',
    'category': 'People',
    'aliases': [
      'couple_with_heart_woman_man',
      'couple_with_heart'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍❤️‍👩',
    'description': 'couple with heart: woman, woman',
    'category': 'People',
    'aliases': [
      'couple_with_heart_woman_woman'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍❤️‍👨',
    'description': 'couple with heart: man, man',
    'category': 'People',
    'aliases': [
      'couple_with_heart_man_man'
    ],
    'tags': []
  },
  {
    'emoji': '💏',
    'description': 'kiss',
    'category': 'People',
    'aliases': [
      'couplekiss_man_woman'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍❤️‍💋‍👩',
    'description': 'kiss: woman, woman',
    'category': 'People',
    'aliases': [
      'couplekiss_woman_woman'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍❤️‍💋‍👨',
    'description': 'kiss: man, man',
    'category': 'People',
    'aliases': [
      'couplekiss_man_man'
    ],
    'tags': []
  },
  {
    'emoji': '👪',
    'description': 'family',
    'category': 'People',
    'aliases': [
      'family_man_woman_boy',
      'family'
    ],
    'tags': [
      'home',
      'parents',
      'child'
    ]
  },
  {
    'emoji': '👨‍👩‍👧',
    'description': 'family: man, woman, girl',
    'category': 'People',
    'aliases': [
      'family_man_woman_girl'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👩‍👧‍👦',
    'description': 'family: man, woman, girl, boy',
    'category': 'People',
    'aliases': [
      'family_man_woman_girl_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👩‍👦‍👦',
    'description': 'family: man, woman, boy, boy',
    'category': 'People',
    'aliases': [
      'family_man_woman_boy_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👩‍👧‍👧',
    'description': 'family: man, woman, girl, girl',
    'category': 'People',
    'aliases': [
      'family_man_woman_girl_girl'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍👩‍👦',
    'description': 'family: woman, woman, boy',
    'category': 'People',
    'aliases': [
      'family_woman_woman_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍👩‍👧',
    'description': 'family: woman, woman, girl',
    'category': 'People',
    'aliases': [
      'family_woman_woman_girl'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍👩‍👧‍👦',
    'description': 'family: woman, woman, girl, boy',
    'category': 'People',
    'aliases': [
      'family_woman_woman_girl_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍👩‍👦‍👦',
    'description': 'family: woman, woman, boy, boy',
    'category': 'People',
    'aliases': [
      'family_woman_woman_boy_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍👩‍👧‍👧',
    'description': 'family: woman, woman, girl, girl',
    'category': 'People',
    'aliases': [
      'family_woman_woman_girl_girl'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👨‍👦',
    'description': 'family: man, man, boy',
    'category': 'People',
    'aliases': [
      'family_man_man_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👨‍👧',
    'description': 'family: man, man, girl',
    'category': 'People',
    'aliases': [
      'family_man_man_girl'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👨‍👧‍👦',
    'description': 'family: man, man, girl, boy',
    'category': 'People',
    'aliases': [
      'family_man_man_girl_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👨‍👦‍👦',
    'description': 'family: man, man, boy, boy',
    'category': 'People',
    'aliases': [
      'family_man_man_boy_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👨‍👧‍👧',
    'description': 'family: man, man, girl, girl',
    'category': 'People',
    'aliases': [
      'family_man_man_girl_girl'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍👦',
    'description': 'family: woman, boy',
    'category': 'People',
    'aliases': [
      'family_woman_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍👧',
    'description': 'family: woman, girl',
    'category': 'People',
    'aliases': [
      'family_woman_girl'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍👧‍👦',
    'description': 'family: woman, girl, boy',
    'category': 'People',
    'aliases': [
      'family_woman_girl_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍👦‍👦',
    'description': 'family: woman, boy, boy',
    'category': 'People',
    'aliases': [
      'family_woman_boy_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👩‍👧‍👧',
    'description': 'family: woman, girl, girl',
    'category': 'People',
    'aliases': [
      'family_woman_girl_girl'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👦',
    'description': 'family: man, boy',
    'category': 'People',
    'aliases': [
      'family_man_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👧',
    'description': 'family: man, girl',
    'category': 'People',
    'aliases': [
      'family_man_girl'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👧‍👦',
    'description': 'family: man, girl, boy',
    'category': 'People',
    'aliases': [
      'family_man_girl_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👦‍👦',
    'description': 'family: man, boy, boy',
    'category': 'People',
    'aliases': [
      'family_man_boy_boy'
    ],
    'tags': []
  },
  {
    'emoji': '👨‍👧‍👧',
    'description': 'family: man, girl, girl',
    'category': 'People',
    'aliases': [
      'family_man_girl_girl'
    ],
    'tags': []
  },
  {
    'emoji': '👚',
    'description': 'woman’s clothes',
    'category': 'People',
    'aliases': [
      'womans_clothes'
    ],
    'tags': []
  },
  {
    'emoji': '👕',
    'description': 't-shirt',
    'category': 'People',
    'aliases': [
      'shirt',
      'tshirt'
    ],
    'tags': []
  },
  {
    'emoji': '👖',
    'description': 'jeans',
    'category': 'People',
    'aliases': [
      'jeans'
    ],
    'tags': [
      'pants'
    ]
  },
  {
    'emoji': '👔',
    'description': 'necktie',
    'category': 'People',
    'aliases': [
      'necktie'
    ],
    'tags': [
      'shirt',
      'formal'
    ]
  },
  {
    'emoji': '👗',
    'description': 'dress',
    'category': 'People',
    'aliases': [
      'dress'
    ],
    'tags': []
  },
  {
    'emoji': '👙',
    'description': 'bikini',
    'category': 'People',
    'aliases': [
      'bikini'
    ],
    'tags': [
      'beach'
    ]
  },
  {
    'emoji': '👘',
    'description': 'kimono',
    'category': 'People',
    'aliases': [
      'kimono'
    ],
    'tags': []
  },
  {
    'emoji': '👠',
    'description': 'high-heeled shoe',
    'category': 'People',
    'aliases': [
      'high_heel'
    ],
    'tags': [
      'shoe'
    ]
  },
  {
    'emoji': '👡',
    'description': 'woman’s sandal',
    'category': 'People',
    'aliases': [
      'sandal'
    ],
    'tags': [
      'shoe'
    ]
  },
  {
    'emoji': '👢',
    'description': 'woman’s boot',
    'category': 'People',
    'aliases': [
      'boot'
    ],
    'tags': []
  },
  {
    'emoji': '👞',
    'description': 'man’s shoe',
    'category': 'People',
    'aliases': [
      'mans_shoe',
      'shoe'
    ],
    'tags': []
  },
  {
    'emoji': '👟',
    'description': 'running shoe',
    'category': 'People',
    'aliases': [
      'athletic_shoe'
    ],
    'tags': [
      'sneaker',
      'sport',
      'running'
    ]
  },
  {
    'emoji': '👒',
    'description': 'woman’s hat',
    'category': 'People',
    'aliases': [
      'womans_hat'
    ],
    'tags': []
  },
  {
    'emoji': '🎩',
    'description': 'top hat',
    'category': 'People',
    'aliases': [
      'tophat'
    ],
    'tags': [
      'hat',
      'classy'
    ]
  },
  {
    'emoji': '🎓',
    'description': 'graduation cap',
    'category': 'People',
    'aliases': [
      'mortar_board'
    ],
    'tags': [
      'education',
      'college',
      'university',
      'graduation'
    ]
  },
  {
    'emoji': '👑',
    'description': 'crown',
    'category': 'People',
    'aliases': [
      'crown'
    ],
    'tags': [
      'king',
      'queen',
      'royal'
    ]
  },
  {
    'emoji': '⛑',
    'description': 'rescue worker’s helmet',
    'category': 'People',
    'aliases': [
      'rescue_worker_helmet'
    ],
    'tags': []
  },
  {
    'emoji': '🎒',
    'description': 'school backpack',
    'category': 'People',
    'aliases': [
      'school_satchel'
    ],
    'tags': []
  },
  {
    'emoji': '👝',
    'description': 'clutch bag',
    'category': 'People',
    'aliases': [
      'pouch'
    ],
    'tags': [
      'bag'
    ]
  },
  {
    'emoji': '👛',
    'description': 'purse',
    'category': 'People',
    'aliases': [
      'purse'
    ],
    'tags': []
  },
  {
    'emoji': '👜',
    'description': 'handbag',
    'category': 'People',
    'aliases': [
      'handbag'
    ],
    'tags': [
      'bag'
    ]
  },
  {
    'emoji': '💼',
    'description': 'briefcase',
    'category': 'People',
    'aliases': [
      'briefcase'
    ],
    'tags': [
      'business'
    ]
  },
  {
    'emoji': '👓',
    'description': 'glasses',
    'category': 'People',
    'aliases': [
      'eyeglasses'
    ],
    'tags': [
      'glasses'
    ]
  },
  {
    'emoji': '🕶',
    'description': 'sunglasses',
    'category': 'People',
    'aliases': [
      'dark_sunglasses'
    ],
    'tags': []
  },
  {
    'emoji': '🌂',
    'description': 'closed umbrella',
    'category': 'People',
    'aliases': [
      'closed_umbrella'
    ],
    'tags': [
      'weather',
      'rain'
    ]
  },
  {
    'emoji': '☂️',
    'description': 'umbrella',
    'category': 'People',
    'aliases': [
      'open_umbrella'
    ],
    'tags': []
  },
  {
    'emoji': '🐶',
    'description': 'dog face',
    'category': 'Nature',
    'aliases': [
      'dog'
    ],
    'tags': [
      'pet'
    ]
  },
  {
    'emoji': '🐱',
    'description': 'cat face',
    'category': 'Nature',
    'aliases': [
      'cat'
    ],
    'tags': [
      'pet'
    ]
  },
  {
    'emoji': '🐭',
    'description': 'mouse face',
    'category': 'Nature',
    'aliases': [
      'mouse'
    ],
    'tags': []
  },
  {
    'emoji': '🐹',
    'description': 'hamster face',
    'category': 'Nature',
    'aliases': [
      'hamster'
    ],
    'tags': [
      'pet'
    ]
  },
  {
    'emoji': '🐰',
    'description': 'rabbit face',
    'category': 'Nature',
    'aliases': [
      'rabbit'
    ],
    'tags': [
      'bunny'
    ]
  },
  {
    'emoji': '🦊',
    'description': 'fox face',
    'category': 'Nature',
    'aliases': [
      'fox_face'
    ],
    'tags': []
  },
  {
    'emoji': '🐻',
    'description': 'bear face',
    'category': 'Nature',
    'aliases': [
      'bear'
    ],
    'tags': []
  },
  {
    'emoji': '🐼',
    'description': 'panda face',
    'category': 'Nature',
    'aliases': [
      'panda_face'
    ],
    'tags': []
  },
  {
    'emoji': '🐨',
    'description': 'koala',
    'category': 'Nature',
    'aliases': [
      'koala'
    ],
    'tags': []
  },
  {
    'emoji': '🐯',
    'description': 'tiger face',
    'category': 'Nature',
    'aliases': [
      'tiger'
    ],
    'tags': []
  },
  {
    'emoji': '🦁',
    'description': 'lion face',
    'category': 'Nature',
    'aliases': [
      'lion'
    ],
    'tags': []
  },
  {
    'emoji': '🐮',
    'description': 'cow face',
    'category': 'Nature',
    'aliases': [
      'cow'
    ],
    'tags': []
  },
  {
    'emoji': '🐷',
    'description': 'pig face',
    'category': 'Nature',
    'aliases': [
      'pig'
    ],
    'tags': []
  },
  {
    'emoji': '🐽',
    'description': 'pig nose',
    'category': 'Nature',
    'aliases': [
      'pig_nose'
    ],
    'tags': []
  },
  {
    'emoji': '🐸',
    'description': 'frog face',
    'category': 'Nature',
    'aliases': [
      'frog'
    ],
    'tags': []
  },
  {
    'emoji': '🐵',
    'description': 'monkey face',
    'category': 'Nature',
    'aliases': [
      'monkey_face'
    ],
    'tags': []
  },
  {
    'emoji': '🙈',
    'description': 'see-no-evil monkey',
    'category': 'Nature',
    'aliases': [
      'see_no_evil'
    ],
    'tags': [
      'monkey',
      'blind',
      'ignore'
    ]
  },
  {
    'emoji': '🙉',
    'description': 'hear-no-evil monkey',
    'category': 'Nature',
    'aliases': [
      'hear_no_evil'
    ],
    'tags': [
      'monkey',
      'deaf'
    ]
  },
  {
    'emoji': '🙊',
    'description': 'speak-no-evil monkey',
    'category': 'Nature',
    'aliases': [
      'speak_no_evil'
    ],
    'tags': [
      'monkey',
      'mute',
      'hush'
    ]
  },
  {
    'emoji': '🐒',
    'description': 'monkey',
    'category': 'Nature',
    'aliases': [
      'monkey'
    ],
    'tags': []
  },
  {
    'emoji': '🐔',
    'description': 'chicken',
    'category': 'Nature',
    'aliases': [
      'chicken'
    ],
    'tags': []
  },
  {
    'emoji': '🐧',
    'description': 'penguin',
    'category': 'Nature',
    'aliases': [
      'penguin'
    ],
    'tags': []
  },
  {
    'emoji': '🐦',
    'description': 'bird',
    'category': 'Nature',
    'aliases': [
      'bird'
    ],
    'tags': []
  },
  {
    'emoji': '🐤',
    'description': 'baby chick',
    'category': 'Nature',
    'aliases': [
      'baby_chick'
    ],
    'tags': []
  },
  {
    'emoji': '🐣',
    'description': 'hatching chick',
    'category': 'Nature',
    'aliases': [
      'hatching_chick'
    ],
    'tags': []
  },
  {
    'emoji': '🐥',
    'description': 'front-facing baby chick',
    'category': 'Nature',
    'aliases': [
      'hatched_chick'
    ],
    'tags': []
  },
  {
    'emoji': '🦆',
    'description': 'duck',
    'category': 'Nature',
    'aliases': [
      'duck'
    ],
    'tags': []
  },
  {
    'emoji': '🦅',
    'description': 'eagle',
    'category': 'Nature',
    'aliases': [
      'eagle'
    ],
    'tags': []
  },
  {
    'emoji': '🦉',
    'description': 'owl',
    'category': 'Nature',
    'aliases': [
      'owl'
    ],
    'tags': []
  },
  {
    'emoji': '🦇',
    'description': 'bat',
    'category': 'Nature',
    'aliases': [
      'bat'
    ],
    'tags': []
  },
  {
    'emoji': '🐺',
    'description': 'wolf face',
    'category': 'Nature',
    'aliases': [
      'wolf'
    ],
    'tags': []
  },
  {
    'emoji': '🐗',
    'description': 'boar',
    'category': 'Nature',
    'aliases': [
      'boar'
    ],
    'tags': []
  },
  {
    'emoji': '🐴',
    'description': 'horse face',
    'category': 'Nature',
    'aliases': [
      'horse'
    ],
    'tags': []
  },
  {
    'emoji': '🦄',
    'description': 'unicorn face',
    'category': 'Nature',
    'aliases': [
      'unicorn'
    ],
    'tags': []
  },
  {
    'emoji': '🐝',
    'description': 'honeybee',
    'category': 'Nature',
    'aliases': [
      'bee',
      'honeybee'
    ],
    'tags': []
  },
  {
    'emoji': '🐛',
    'description': 'bug',
    'category': 'Nature',
    'aliases': [
      'bug'
    ],
    'tags': []
  },
  {
    'emoji': '🦋',
    'description': 'butterfly',
    'category': 'Nature',
    'aliases': [
      'butterfly'
    ],
    'tags': []
  },
  {
    'emoji': '🐌',
    'description': 'snail',
    'category': 'Nature',
    'aliases': [
      'snail'
    ],
    'tags': [
      'slow'
    ]
  },
  {
    'emoji': '🐚',
    'description': 'spiral shell',
    'category': 'Nature',
    'aliases': [
      'shell'
    ],
    'tags': [
      'sea',
      'beach'
    ]
  },
  {
    'emoji': '🐞',
    'description': 'lady beetle',
    'category': 'Nature',
    'aliases': [
      'beetle'
    ],
    'tags': [
      'bug'
    ]
  },
  {
    'emoji': '🐜',
    'description': 'ant',
    'category': 'Nature',
    'aliases': [
      'ant'
    ],
    'tags': []
  },
  {
    'emoji': '🕷',
    'description': 'spider',
    'category': 'Nature',
    'aliases': [
      'spider'
    ],
    'tags': []
  },
  {
    'emoji': '🕸',
    'description': 'spider web',
    'category': 'Nature',
    'aliases': [
      'spider_web'
    ],
    'tags': []
  },
  {
    'emoji': '🐢',
    'description': 'turtle',
    'category': 'Nature',
    'aliases': [
      'turtle'
    ],
    'tags': [
      'slow'
    ]
  },
  {
    'emoji': '🐍',
    'description': 'snake',
    'category': 'Nature',
    'aliases': [
      'snake'
    ],
    'tags': []
  },
  {
    'emoji': '🦎',
    'description': 'lizard',
    'category': 'Nature',
    'aliases': [
      'lizard'
    ],
    'tags': []
  },
  {
    'emoji': '🦂',
    'description': 'scorpion',
    'category': 'Nature',
    'aliases': [
      'scorpion'
    ],
    'tags': []
  },
  {
    'emoji': '🦀',
    'description': 'crab',
    'category': 'Nature',
    'aliases': [
      'crab'
    ],
    'tags': []
  },
  {
    'emoji': '🦑',
    'description': 'squid',
    'category': 'Nature',
    'aliases': [
      'squid'
    ],
    'tags': []
  },
  {
    'emoji': '🐙',
    'description': 'octopus',
    'category': 'Nature',
    'aliases': [
      'octopus'
    ],
    'tags': []
  },
  {
    'emoji': '🦐',
    'description': 'shrimp',
    'category': 'Nature',
    'aliases': [
      'shrimp'
    ],
    'tags': []
  },
  {
    'emoji': '🐠',
    'description': 'tropical fish',
    'category': 'Nature',
    'aliases': [
      'tropical_fish'
    ],
    'tags': []
  },
  {
    'emoji': '🐟',
    'description': 'fish',
    'category': 'Nature',
    'aliases': [
      'fish'
    ],
    'tags': []
  },
  {
    'emoji': '🐡',
    'description': 'blowfish',
    'category': 'Nature',
    'aliases': [
      'blowfish'
    ],
    'tags': []
  },
  {
    'emoji': '🐬',
    'description': 'dolphin',
    'category': 'Nature',
    'aliases': [
      'dolphin',
      'flipper'
    ],
    'tags': []
  },
  {
    'emoji': '🦈',
    'description': 'shark',
    'category': 'Nature',
    'aliases': [
      'shark'
    ],
    'tags': []
  },
  {
    'emoji': '🐳',
    'description': 'spouting whale',
    'category': 'Nature',
    'aliases': [
      'whale'
    ],
    'tags': [
      'sea'
    ]
  },
  {
    'emoji': '🐋',
    'description': 'whale',
    'category': 'Nature',
    'aliases': [
      'whale2'
    ],
    'tags': []
  },
  {
    'emoji': '🐊',
    'description': 'crocodile',
    'category': 'Nature',
    'aliases': [
      'crocodile'
    ],
    'tags': []
  },
  {
    'emoji': '🐆',
    'description': 'leopard',
    'category': 'Nature',
    'aliases': [
      'leopard'
    ],
    'tags': []
  },
  {
    'emoji': '🐅',
    'description': 'tiger',
    'category': 'Nature',
    'aliases': [
      'tiger2'
    ],
    'tags': []
  },
  {
    'emoji': '🐃',
    'description': 'water buffalo',
    'category': 'Nature',
    'aliases': [
      'water_buffalo'
    ],
    'tags': []
  },
  {
    'emoji': '🐂',
    'description': 'ox',
    'category': 'Nature',
    'aliases': [
      'ox'
    ],
    'tags': []
  },
  {
    'emoji': '🐄',
    'description': 'cow',
    'category': 'Nature',
    'aliases': [
      'cow2'
    ],
    'tags': []
  },
  {
    'emoji': '🦌',
    'description': 'deer',
    'category': 'Nature',
    'aliases': [
      'deer'
    ],
    'tags': []
  },
  {
    'emoji': '🐪',
    'description': 'camel',
    'category': 'Nature',
    'aliases': [
      'dromedary_camel'
    ],
    'tags': [
      'desert'
    ]
  },
  {
    'emoji': '🐫',
    'description': 'two-hump camel',
    'category': 'Nature',
    'aliases': [
      'camel'
    ],
    'tags': []
  },
  {
    'emoji': '🐘',
    'description': 'elephant',
    'category': 'Nature',
    'aliases': [
      'elephant'
    ],
    'tags': []
  },
  {
    'emoji': '🦏',
    'description': 'rhinoceros',
    'category': 'Nature',
    'aliases': [
      'rhinoceros'
    ],
    'tags': []
  },
  {
    'emoji': '🦍',
    'description': 'gorilla',
    'category': 'Nature',
    'aliases': [
      'gorilla'
    ],
    'tags': []
  },
  {
    'emoji': '🐎',
    'description': 'horse',
    'category': 'Nature',
    'aliases': [
      'racehorse'
    ],
    'tags': [
      'speed'
    ]
  },
  {
    'emoji': '🐖',
    'description': 'pig',
    'category': 'Nature',
    'aliases': [
      'pig2'
    ],
    'tags': []
  },
  {
    'emoji': '🐐',
    'description': 'goat',
    'category': 'Nature',
    'aliases': [
      'goat'
    ],
    'tags': []
  },
  {
    'emoji': '🐏',
    'description': 'ram',
    'category': 'Nature',
    'aliases': [
      'ram'
    ],
    'tags': []
  },
  {
    'emoji': '🐑',
    'description': 'sheep',
    'category': 'Nature',
    'aliases': [
      'sheep'
    ],
    'tags': []
  },
  {
    'emoji': '🐕',
    'description': 'dog',
    'category': 'Nature',
    'aliases': [
      'dog2'
    ],
    'tags': []
  },
  {
    'emoji': '🐩',
    'description': 'poodle',
    'category': 'Nature',
    'aliases': [
      'poodle'
    ],
    'tags': [
      'dog'
    ]
  },
  {
    'emoji': '🐈',
    'description': 'cat',
    'category': 'Nature',
    'aliases': [
      'cat2'
    ],
    'tags': []
  },
  {
    'emoji': '🐓',
    'description': 'rooster',
    'category': 'Nature',
    'aliases': [
      'rooster'
    ],
    'tags': []
  },
  {
    'emoji': '🦃',
    'description': 'turkey',
    'category': 'Nature',
    'aliases': [
      'turkey'
    ],
    'tags': [
      'thanksgiving'
    ]
  },
  {
    'emoji': '🕊',
    'description': 'dove',
    'category': 'Nature',
    'aliases': [
      'dove'
    ],
    'tags': [
      'peace'
    ]
  },
  {
    'emoji': '🐇',
    'description': 'rabbit',
    'category': 'Nature',
    'aliases': [
      'rabbit2'
    ],
    'tags': []
  },
  {
    'emoji': '🐁',
    'description': 'mouse',
    'category': 'Nature',
    'aliases': [
      'mouse2'
    ],
    'tags': []
  },
  {
    'emoji': '🐀',
    'description': 'rat',
    'category': 'Nature',
    'aliases': [
      'rat'
    ],
    'tags': []
  },
  {
    'emoji': '🐿',
    'description': 'chipmunk',
    'category': 'Nature',
    'aliases': [
      'chipmunk'
    ],
    'tags': []
  },
  {
    'emoji': '🐾',
    'description': 'paw prints',
    'category': 'Nature',
    'aliases': [
      'feet',
      'paw_prints'
    ],
    'tags': []
  },
  {
    'emoji': '🐉',
    'description': 'dragon',
    'category': 'Nature',
    'aliases': [
      'dragon'
    ],
    'tags': []
  },
  {
    'emoji': '🐲',
    'description': 'dragon face',
    'category': 'Nature',
    'aliases': [
      'dragon_face'
    ],
    'tags': []
  },
  {
    'emoji': '🌵',
    'description': 'cactus',
    'category': 'Nature',
    'aliases': [
      'cactus'
    ],
    'tags': []
  },
  {
    'emoji': '🎄',
    'description': 'Christmas tree',
    'category': 'Nature',
    'aliases': [
      'christmas_tree'
    ],
    'tags': []
  },
  {
    'emoji': '🌲',
    'description': 'evergreen tree',
    'category': 'Nature',
    'aliases': [
      'evergreen_tree'
    ],
    'tags': [
      'wood'
    ]
  },
  {
    'emoji': '🌳',
    'description': 'deciduous tree',
    'category': 'Nature',
    'aliases': [
      'deciduous_tree'
    ],
    'tags': [
      'wood'
    ]
  },
  {
    'emoji': '🌴',
    'description': 'palm tree',
    'category': 'Nature',
    'aliases': [
      'palm_tree'
    ],
    'tags': []
  },
  {
    'emoji': '🌱',
    'description': 'seedling',
    'category': 'Nature',
    'aliases': [
      'seedling'
    ],
    'tags': [
      'plant'
    ]
  },
  {
    'emoji': '🌿',
    'description': 'herb',
    'category': 'Nature',
    'aliases': [
      'herb'
    ],
    'tags': []
  },
  {
    'emoji': '☘️',
    'description': 'shamrock',
    'category': 'Nature',
    'aliases': [
      'shamrock'
    ],
    'tags': []
  },
  {
    'emoji': '🍀',
    'description': 'four leaf clover',
    'category': 'Nature',
    'aliases': [
      'four_leaf_clover'
    ],
    'tags': [
      'luck'
    ]
  },
  {
    'emoji': '🎍',
    'description': 'pine decoration',
    'category': 'Nature',
    'aliases': [
      'bamboo'
    ],
    'tags': []
  },
  {
    'emoji': '🎋',
    'description': 'tanabata tree',
    'category': 'Nature',
    'aliases': [
      'tanabata_tree'
    ],
    'tags': []
  },
  {
    'emoji': '🍃',
    'description': 'leaf fluttering in wind',
    'category': 'Nature',
    'aliases': [
      'leaves'
    ],
    'tags': [
      'leaf'
    ]
  },
  {
    'emoji': '🍂',
    'description': 'fallen leaf',
    'category': 'Nature',
    'aliases': [
      'fallen_leaf'
    ],
    'tags': [
      'autumn'
    ]
  },
  {
    'emoji': '🍁',
    'description': 'maple leaf',
    'category': 'Nature',
    'aliases': [
      'maple_leaf'
    ],
    'tags': [
      'canada'
    ]
  },
  {
    'emoji': '🍄',
    'description': 'mushroom',
    'category': 'Nature',
    'aliases': [
      'mushroom'
    ],
    'tags': []
  },
  {
    'emoji': '🌾',
    'description': 'sheaf of rice',
    'category': 'Nature',
    'aliases': [
      'ear_of_rice'
    ],
    'tags': []
  },
  {
    'emoji': '💐',
    'description': 'bouquet',
    'category': 'Nature',
    'aliases': [
      'bouquet'
    ],
    'tags': [
      'flowers'
    ]
  },
  {
    'emoji': '🌷',
    'description': 'tulip',
    'category': 'Nature',
    'aliases': [
      'tulip'
    ],
    'tags': [
      'flower'
    ]
  },
  {
    'emoji': '🌹',
    'description': 'rose',
    'category': 'Nature',
    'aliases': [
      'rose'
    ],
    'tags': [
      'flower'
    ]
  },
  {
    'emoji': '🥀',
    'description': 'wilted flower',
    'category': 'Nature',
    'aliases': [
      'wilted_flower'
    ],
    'tags': []
  },
  {
    'emoji': '🌻',
    'description': 'sunflower',
    'category': 'Nature',
    'aliases': [
      'sunflower'
    ],
    'tags': []
  },
  {
    'emoji': '🌼',
    'description': 'blossom',
    'category': 'Nature',
    'aliases': [
      'blossom'
    ],
    'tags': []
  },
  {
    'emoji': '🌸',
    'description': 'cherry blossom',
    'category': 'Nature',
    'aliases': [
      'cherry_blossom'
    ],
    'tags': [
      'flower',
      'spring'
    ]
  },
  {
    'emoji': '🌺',
    'description': 'hibiscus',
    'category': 'Nature',
    'aliases': [
      'hibiscus'
    ],
    'tags': []
  },
  {
    'emoji': '🌎',
    'description': 'globe showing Americas',
    'category': 'Nature',
    'aliases': [
      'earth_americas'
    ],
    'tags': [
      'globe',
      'world',
      'international'
    ]
  },
  {
    'emoji': '🌍',
    'description': 'globe showing Europe-Africa',
    'category': 'Nature',
    'aliases': [
      'earth_africa'
    ],
    'tags': [
      'globe',
      'world',
      'international'
    ]
  },
  {
    'emoji': '🌏',
    'description': 'globe showing Asia-Australia',
    'category': 'Nature',
    'aliases': [
      'earth_asia'
    ],
    'tags': [
      'globe',
      'world',
      'international'
    ]
  },
  {
    'emoji': '🌕',
    'description': 'full moon',
    'category': 'Nature',
    'aliases': [
      'full_moon'
    ],
    'tags': []
  },
  {
    'emoji': '🌖',
    'description': 'waning gibbous moon',
    'category': 'Nature',
    'aliases': [
      'waning_gibbous_moon'
    ],
    'tags': []
  },
  {
    'emoji': '🌗',
    'description': 'last quarter moon',
    'category': 'Nature',
    'aliases': [
      'last_quarter_moon'
    ],
    'tags': []
  },
  {
    'emoji': '🌘',
    'description': 'waning crescent moon',
    'category': 'Nature',
    'aliases': [
      'waning_crescent_moon'
    ],
    'tags': []
  },
  {
    'emoji': '🌑',
    'description': 'new moon',
    'category': 'Nature',
    'aliases': [
      'new_moon'
    ],
    'tags': []
  },
  {
    'emoji': '🌒',
    'description': 'waxing crescent moon',
    'category': 'Nature',
    'aliases': [
      'waxing_crescent_moon'
    ],
    'tags': []
  },
  {
    'emoji': '🌓',
    'description': 'first quarter moon',
    'category': 'Nature',
    'aliases': [
      'first_quarter_moon'
    ],
    'tags': []
  },
  {
    'emoji': '🌔',
    'description': 'waxing gibbous moon',
    'category': 'Nature',
    'aliases': [
      'moon',
      'waxing_gibbous_moon'
    ],
    'tags': []
  },
  {
    'emoji': '🌚',
    'description': 'new moon face',
    'category': 'Nature',
    'aliases': [
      'new_moon_with_face'
    ],
    'tags': []
  },
  {
    'emoji': '🌝',
    'description': 'full moon with face',
    'category': 'Nature',
    'aliases': [
      'full_moon_with_face'
    ],
    'tags': []
  },
  {
    'emoji': '🌞',
    'description': 'sun with face',
    'category': 'Nature',
    'aliases': [
      'sun_with_face'
    ],
    'tags': [
      'summer'
    ]
  },
  {
    'emoji': '🌛',
    'description': 'first quarter moon with face',
    'category': 'Nature',
    'aliases': [
      'first_quarter_moon_with_face'
    ],
    'tags': []
  },
  {
    'emoji': '🌜',
    'description': 'last quarter moon with face',
    'category': 'Nature',
    'aliases': [
      'last_quarter_moon_with_face'
    ],
    'tags': []
  },
  {
    'emoji': '🌙',
    'description': 'crescent moon',
    'category': 'Nature',
    'aliases': [
      'crescent_moon'
    ],
    'tags': [
      'night'
    ]
  },
  {
    'emoji': '💫',
    'description': 'dizzy',
    'category': 'Nature',
    'aliases': [
      'dizzy'
    ],
    'tags': [
      'star'
    ]
  },
  {
    'emoji': '⭐️',
    'description': 'white medium star',
    'category': 'Nature',
    'aliases': [
      'star'
    ],
    'tags': []
  },
  {
    'emoji': '🌟',
    'description': 'glowing star',
    'category': 'Nature',
    'aliases': [
      'star2'
    ],
    'tags': []
  },
  {
    'emoji': '✨',
    'description': 'sparkles',
    'category': 'Nature',
    'aliases': [
      'sparkles'
    ],
    'tags': [
      'shiny'
    ]
  },
  {
    'emoji': '⚡️',
    'description': 'high voltage',
    'category': 'Nature',
    'aliases': [
      'zap'
    ],
    'tags': [
      'lightning',
      'thunder'
    ]
  },
  {
    'emoji': '🔥',
    'description': 'fire',
    'category': 'Nature',
    'aliases': [
      'fire'
    ],
    'tags': [
      'burn'
    ]
  },
  {
    'emoji': '💥',
    'description': 'collision',
    'category': 'Nature',
    'aliases': [
      'boom',
      'collision'
    ],
    'tags': [
      'explode'
    ]
  },
  {
    'emoji': '☄',
    'description': 'comet',
    'category': 'Nature',
    'aliases': [
      'comet'
    ],
    'tags': []
  },
  {
    'emoji': '☀️',
    'description': 'sun',
    'category': 'Nature',
    'aliases': [
      'sunny'
    ],
    'tags': [
      'weather'
    ]
  },
  {
    'emoji': '🌤',
    'description': 'sun behind small cloud',
    'category': 'Nature',
    'aliases': [
      'sun_behind_small_cloud'
    ],
    'tags': []
  },
  {
    'emoji': '⛅️',
    'description': 'sun behind cloud',
    'category': 'Nature',
    'aliases': [
      'partly_sunny'
    ],
    'tags': [
      'weather',
      'cloud'
    ]
  },
  {
    'emoji': '🌥',
    'description': 'sun behind large cloud',
    'category': 'Nature',
    'aliases': [
      'sun_behind_large_cloud'
    ],
    'tags': []
  },
  {
    'emoji': '🌦',
    'description': 'sun behind rain cloud',
    'category': 'Nature',
    'aliases': [
      'sun_behind_rain_cloud'
    ],
    'tags': []
  },
  {
    'emoji': '🌈',
    'description': 'rainbow',
    'category': 'Nature',
    'aliases': [
      'rainbow'
    ],
    'tags': []
  },
  {
    'emoji': '☁️',
    'description': 'cloud',
    'category': 'Nature',
    'aliases': [
      'cloud'
    ],
    'tags': []
  },
  {
    'emoji': '🌧',
    'description': 'cloud with rain',
    'category': 'Nature',
    'aliases': [
      'cloud_with_rain'
    ],
    'tags': []
  },
  {
    'emoji': '⛈',
    'description': 'cloud with lightning and rain',
    'category': 'Nature',
    'aliases': [
      'cloud_with_lightning_and_rain'
    ],
    'tags': []
  },
  {
    'emoji': '🌩',
    'description': 'cloud with lightning',
    'category': 'Nature',
    'aliases': [
      'cloud_with_lightning'
    ],
    'tags': []
  },
  {
    'emoji': '🌨',
    'description': 'cloud with snow',
    'category': 'Nature',
    'aliases': [
      'cloud_with_snow'
    ],
    'tags': []
  },
  {
    'emoji': '☃️',
    'description': 'snowman',
    'category': 'Nature',
    'aliases': [
      'snowman_with_snow'
    ],
    'tags': [
      'winter',
      'christmas'
    ]
  },
  {
    'emoji': '⛄️',
    'description': 'snowman without snow',
    'category': 'Nature',
    'aliases': [
      'snowman'
    ],
    'tags': [
      'winter'
    ]
  },
  {
    'emoji': '❄️',
    'description': 'snowflake',
    'category': 'Nature',
    'aliases': [
      'snowflake'
    ],
    'tags': [
      'winter',
      'cold',
      'weather'
    ]
  },
  {
    'emoji': '🌬',
    'description': 'wind face',
    'category': 'Nature',
    'aliases': [
      'wind_face'
    ],
    'tags': []
  },
  {
    'emoji': '💨',
    'description': 'dashing away',
    'category': 'Nature',
    'aliases': [
      'dash'
    ],
    'tags': [
      'wind',
      'blow',
      'fast'
    ]
  },
  {
    'emoji': '🌪',
    'description': 'tornado',
    'category': 'Nature',
    'aliases': [
      'tornado'
    ],
    'tags': []
  },
  {
    'emoji': '🌫',
    'description': 'fog',
    'category': 'Nature',
    'aliases': [
      'fog'
    ],
    'tags': []
  },
  {
    'emoji': '🌊',
    'description': 'water wave',
    'category': 'Nature',
    'aliases': [
      'ocean'
    ],
    'tags': [
      'sea'
    ]
  },
  {
    'emoji': '💧',
    'description': 'droplet',
    'category': 'Nature',
    'aliases': [
      'droplet'
    ],
    'tags': [
      'water'
    ]
  },
  {
    'emoji': '💦',
    'description': 'sweat droplets',
    'category': 'Nature',
    'aliases': [
      'sweat_drops'
    ],
    'tags': [
      'water',
      'workout'
    ]
  },
  {
    'emoji': '☔️',
    'description': 'umbrella with rain drops',
    'category': 'Nature',
    'aliases': [
      'umbrella'
    ],
    'tags': [
      'rain',
      'weather'
    ]
  },
  {
    'emoji': '🍏',
    'description': 'green apple',
    'category': 'Foods',
    'aliases': [
      'green_apple'
    ],
    'tags': [
      'fruit'
    ]
  },
  {
    'emoji': '🍎',
    'description': 'red apple',
    'category': 'Foods',
    'aliases': [
      'apple'
    ],
    'tags': []
  },
  {
    'emoji': '🍐',
    'description': 'pear',
    'category': 'Foods',
    'aliases': [
      'pear'
    ],
    'tags': []
  },
  {
    'emoji': '🍊',
    'description': 'tangerine',
    'category': 'Foods',
    'aliases': [
      'tangerine',
      'orange',
      'mandarin'
    ],
    'tags': []
  },
  {
    'emoji': '🍋',
    'description': 'lemon',
    'category': 'Foods',
    'aliases': [
      'lemon'
    ],
    'tags': []
  },
  {
    'emoji': '🍌',
    'description': 'banana',
    'category': 'Foods',
    'aliases': [
      'banana'
    ],
    'tags': [
      'fruit'
    ]
  },
  {
    'emoji': '🍉',
    'description': 'watermelon',
    'category': 'Foods',
    'aliases': [
      'watermelon'
    ],
    'tags': []
  },
  {
    'emoji': '🍇',
    'description': 'grapes',
    'category': 'Foods',
    'aliases': [
      'grapes'
    ],
    'tags': []
  },
  {
    'emoji': '🍓',
    'description': 'strawberry',
    'category': 'Foods',
    'aliases': [
      'strawberry'
    ],
    'tags': [
      'fruit'
    ]
  },
  {
    'emoji': '🍈',
    'description': 'melon',
    'category': 'Foods',
    'aliases': [
      'melon'
    ],
    'tags': []
  },
  {
    'emoji': '🍒',
    'description': 'cherries',
    'category': 'Foods',
    'aliases': [
      'cherries'
    ],
    'tags': [
      'fruit'
    ]
  },
  {
    'emoji': '🍑',
    'description': 'peach',
    'category': 'Foods',
    'aliases': [
      'peach'
    ],
    'tags': []
  },
  {
    'emoji': '🍍',
    'description': 'pineapple',
    'category': 'Foods',
    'aliases': [
      'pineapple'
    ],
    'tags': []
  },
  {
    'emoji': '🥝',
    'description': 'kiwi fruit',
    'category': 'Foods',
    'aliases': [
      'kiwi_fruit'
    ],
    'tags': []
  },
  {
    'emoji': '🥑',
    'description': 'avocado',
    'category': 'Foods',
    'aliases': [
      'avocado'
    ],
    'tags': []
  },
  {
    'emoji': '🍅',
    'description': 'tomato',
    'category': 'Foods',
    'aliases': [
      'tomato'
    ],
    'tags': []
  },
  {
    'emoji': '🍆',
    'description': 'eggplant',
    'category': 'Foods',
    'aliases': [
      'eggplant'
    ],
    'tags': [
      'aubergine'
    ]
  },
  {
    'emoji': '🥒',
    'description': 'cucumber',
    'category': 'Foods',
    'aliases': [
      'cucumber'
    ],
    'tags': []
  },
  {
    'emoji': '🥕',
    'description': 'carrot',
    'category': 'Foods',
    'aliases': [
      'carrot'
    ],
    'tags': []
  },
  {
    'emoji': '🌽',
    'description': 'ear of corn',
    'category': 'Foods',
    'aliases': [
      'corn'
    ],
    'tags': []
  },
  {
    'emoji': '🌶',
    'description': 'hot pepper',
    'category': 'Foods',
    'aliases': [
      'hot_pepper'
    ],
    'tags': [
      'spicy'
    ]
  },
  {
    'emoji': '🥔',
    'description': 'potato',
    'category': 'Foods',
    'aliases': [
      'potato'
    ],
    'tags': []
  },
  {
    'emoji': '🍠',
    'description': 'roasted sweet potato',
    'category': 'Foods',
    'aliases': [
      'sweet_potato'
    ],
    'tags': []
  },
  {
    'emoji': '🌰',
    'description': 'chestnut',
    'category': 'Foods',
    'aliases': [
      'chestnut'
    ],
    'tags': []
  },
  {
    'emoji': '🥜',
    'description': 'peanuts',
    'category': 'Foods',
    'aliases': [
      'peanuts'
    ],
    'tags': []
  },
  {
    'emoji': '🍯',
    'description': 'honey pot',
    'category': 'Foods',
    'aliases': [
      'honey_pot'
    ],
    'tags': []
  },
  {
    'emoji': '🥐',
    'description': 'croissant',
    'category': 'Foods',
    'aliases': [
      'croissant'
    ],
    'tags': []
  },
  {
    'emoji': '🍞',
    'description': 'bread',
    'category': 'Foods',
    'aliases': [
      'bread'
    ],
    'tags': [
      'toast'
    ]
  },
  {
    'emoji': '🥖',
    'description': 'baguette bread',
    'category': 'Foods',
    'aliases': [
      'baguette_bread'
    ],
    'tags': []
  },
  {
    'emoji': '🧀',
    'description': 'cheese wedge',
    'category': 'Foods',
    'aliases': [
      'cheese'
    ],
    'tags': []
  },
  {
    'emoji': '🥚',
    'description': 'egg',
    'category': 'Foods',
    'aliases': [
      'egg'
    ],
    'tags': []
  },
  {
    'emoji': '🍳',
    'description': 'cooking',
    'category': 'Foods',
    'aliases': [
      'fried_egg'
    ],
    'tags': [
      'breakfast'
    ]
  },
  {
    'emoji': '🥓',
    'description': 'bacon',
    'category': 'Foods',
    'aliases': [
      'bacon'
    ],
    'tags': []
  },
  {
    'emoji': '🥞',
    'description': 'pancakes',
    'category': 'Foods',
    'aliases': [
      'pancakes'
    ],
    'tags': []
  },
  {
    'emoji': '🍤',
    'description': 'fried shrimp',
    'category': 'Foods',
    'aliases': [
      'fried_shrimp'
    ],
    'tags': [
      'tempura'
    ]
  },
  {
    'emoji': '🍗',
    'description': 'poultry leg',
    'category': 'Foods',
    'aliases': [
      'poultry_leg'
    ],
    'tags': [
      'meat',
      'chicken'
    ]
  },
  {
    'emoji': '🍖',
    'description': 'meat on bone',
    'category': 'Foods',
    'aliases': [
      'meat_on_bone'
    ],
    'tags': []
  },
  {
    'emoji': '🍕',
    'description': 'pizza',
    'category': 'Foods',
    'aliases': [
      'pizza'
    ],
    'tags': []
  },
  {
    'emoji': '🌭',
    'description': 'hot dog',
    'category': 'Foods',
    'aliases': [
      'hotdog'
    ],
    'tags': []
  },
  {
    'emoji': '🍔',
    'description': 'hamburger',
    'category': 'Foods',
    'aliases': [
      'hamburger'
    ],
    'tags': [
      'burger'
    ]
  },
  {
    'emoji': '🍟',
    'description': 'french fries',
    'category': 'Foods',
    'aliases': [
      'fries'
    ],
    'tags': []
  },
  {
    'emoji': '🥙',
    'description': 'stuffed flatbread',
    'category': 'Foods',
    'aliases': [
      'stuffed_flatbread'
    ],
    'tags': []
  },
  {
    'emoji': '🌮',
    'description': 'taco',
    'category': 'Foods',
    'aliases': [
      'taco'
    ],
    'tags': []
  },
  {
    'emoji': '🌯',
    'description': 'burrito',
    'category': 'Foods',
    'aliases': [
      'burrito'
    ],
    'tags': []
  },
  {
    'emoji': '🥗',
    'description': 'green salad',
    'category': 'Foods',
    'aliases': [
      'green_salad'
    ],
    'tags': []
  },
  {
    'emoji': '🥘',
    'description': 'shallow pan of food',
    'category': 'Foods',
    'aliases': [
      'shallow_pan_of_food'
    ],
    'tags': [
      'paella',
      'curry'
    ]
  },
  {
    'emoji': '🍝',
    'description': 'spaghetti',
    'category': 'Foods',
    'aliases': [
      'spaghetti'
    ],
    'tags': [
      'pasta'
    ]
  },
  {
    'emoji': '🍜',
    'description': 'steaming bowl',
    'category': 'Foods',
    'aliases': [
      'ramen'
    ],
    'tags': [
      'noodle'
    ]
  },
  {
    'emoji': '🍲',
    'description': 'pot of food',
    'category': 'Foods',
    'aliases': [
      'stew'
    ],
    'tags': []
  },
  {
    'emoji': '🍥',
    'description': 'fish cake with swirl',
    'category': 'Foods',
    'aliases': [
      'fish_cake'
    ],
    'tags': []
  },
  {
    'emoji': '🍣',
    'description': 'sushi',
    'category': 'Foods',
    'aliases': [
      'sushi'
    ],
    'tags': []
  },
  {
    'emoji': '🍱',
    'description': 'bento box',
    'category': 'Foods',
    'aliases': [
      'bento'
    ],
    'tags': []
  },
  {
    'emoji': '🍛',
    'description': 'curry rice',
    'category': 'Foods',
    'aliases': [
      'curry'
    ],
    'tags': []
  },
  {
    'emoji': '🍚',
    'description': 'cooked rice',
    'category': 'Foods',
    'aliases': [
      'rice'
    ],
    'tags': []
  },
  {
    'emoji': '🍙',
    'description': 'rice ball',
    'category': 'Foods',
    'aliases': [
      'rice_ball'
    ],
    'tags': []
  },
  {
    'emoji': '🍘',
    'description': 'rice cracker',
    'category': 'Foods',
    'aliases': [
      'rice_cracker'
    ],
    'tags': []
  },
  {
    'emoji': '🍢',
    'description': 'oden',
    'category': 'Foods',
    'aliases': [
      'oden'
    ],
    'tags': []
  },
  {
    'emoji': '🍡',
    'description': 'dango',
    'category': 'Foods',
    'aliases': [
      'dango'
    ],
    'tags': []
  },
  {
    'emoji': '🍧',
    'description': 'shaved ice',
    'category': 'Foods',
    'aliases': [
      'shaved_ice'
    ],
    'tags': []
  },
  {
    'emoji': '🍨',
    'description': 'ice cream',
    'category': 'Foods',
    'aliases': [
      'ice_cream'
    ],
    'tags': []
  },
  {
    'emoji': '🍦',
    'description': 'soft ice cream',
    'category': 'Foods',
    'aliases': [
      'icecream'
    ],
    'tags': []
  },
  {
    'emoji': '🍰',
    'description': 'shortcake',
    'category': 'Foods',
    'aliases': [
      'cake'
    ],
    'tags': [
      'dessert'
    ]
  },
  {
    'emoji': '🎂',
    'description': 'birthday cake',
    'category': 'Foods',
    'aliases': [
      'birthday'
    ],
    'tags': [
      'party'
    ]
  },
  {
    'emoji': '🍮',
    'description': 'custard',
    'category': 'Foods',
    'aliases': [
      'custard'
    ],
    'tags': []
  },
  {
    'emoji': '🍭',
    'description': 'lollipop',
    'category': 'Foods',
    'aliases': [
      'lollipop'
    ],
    'tags': []
  },
  {
    'emoji': '🍬',
    'description': 'candy',
    'category': 'Foods',
    'aliases': [
      'candy'
    ],
    'tags': [
      'sweet'
    ]
  },
  {
    'emoji': '🍫',
    'description': 'chocolate bar',
    'category': 'Foods',
    'aliases': [
      'chocolate_bar'
    ],
    'tags': []
  },
  {
    'emoji': '🍿',
    'description': 'popcorn',
    'category': 'Foods',
    'aliases': [
      'popcorn'
    ],
    'tags': []
  },
  {
    'emoji': '🍩',
    'description': 'doughnut',
    'category': 'Foods',
    'aliases': [
      'doughnut'
    ],
    'tags': []
  },
  {
    'emoji': '🍪',
    'description': 'cookie',
    'category': 'Foods',
    'aliases': [
      'cookie'
    ],
    'tags': []
  },
  {
    'emoji': '🥛',
    'description': 'glass of milk',
    'category': 'Foods',
    'aliases': [
      'milk_glass'
    ],
    'tags': []
  },
  {
    'emoji': '🍼',
    'description': 'baby bottle',
    'category': 'Foods',
    'aliases': [
      'baby_bottle'
    ],
    'tags': [
      'milk'
    ]
  },
  {
    'emoji': '☕️',
    'description': 'hot beverage',
    'category': 'Foods',
    'aliases': [
      'coffee'
    ],
    'tags': [
      'cafe',
      'espresso'
    ]
  },
  {
    'emoji': '🍵',
    'description': 'teacup without handle',
    'category': 'Foods',
    'aliases': [
      'tea'
    ],
    'tags': [
      'green',
      'breakfast'
    ]
  },
  {
    'emoji': '🍶',
    'description': 'sake',
    'category': 'Foods',
    'aliases': [
      'sake'
    ],
    'tags': []
  },
  {
    'emoji': '🍺',
    'description': 'beer mug',
    'category': 'Foods',
    'aliases': [
      'beer'
    ],
    'tags': [
      'drink'
    ]
  },
  {
    'emoji': '🍻',
    'description': 'clinking beer mugs',
    'category': 'Foods',
    'aliases': [
      'beers'
    ],
    'tags': [
      'drinks'
    ]
  },
  {
    'emoji': '🥂',
    'description': 'clinking glasses',
    'category': 'Foods',
    'aliases': [
      'clinking_glasses'
    ],
    'tags': [
      'cheers',
      'toast'
    ]
  },
  {
    'emoji': '🍷',
    'description': 'wine glass',
    'category': 'Foods',
    'aliases': [
      'wine_glass'
    ],
    'tags': []
  },
  {
    'emoji': '🥃',
    'description': 'tumbler glass',
    'category': 'Foods',
    'aliases': [
      'tumbler_glass'
    ],
    'tags': [
      'whisky'
    ]
  },
  {
    'emoji': '🍸',
    'description': 'cocktail glass',
    'category': 'Foods',
    'aliases': [
      'cocktail'
    ],
    'tags': [
      'drink'
    ]
  },
  {
    'emoji': '🍹',
    'description': 'tropical drink',
    'category': 'Foods',
    'aliases': [
      'tropical_drink'
    ],
    'tags': [
      'summer',
      'vacation'
    ]
  },
  {
    'emoji': '🍾',
    'description': 'bottle with popping cork',
    'category': 'Foods',
    'aliases': [
      'champagne'
    ],
    'tags': [
      'bottle',
      'bubbly',
      'celebration'
    ]
  },
  {
    'emoji': '🥄',
    'description': 'spoon',
    'category': 'Foods',
    'aliases': [
      'spoon'
    ],
    'tags': []
  },
  {
    'emoji': '🍴',
    'description': 'fork and knife',
    'category': 'Foods',
    'aliases': [
      'fork_and_knife'
    ],
    'tags': [
      'cutlery'
    ]
  },
  {
    'emoji': '🍽',
    'description': 'fork and knife with plate',
    'category': 'Foods',
    'aliases': [
      'plate_with_cutlery'
    ],
    'tags': [
      'dining',
      'dinner'
    ]
  },
  {
    'emoji': '⚽️',
    'description': 'soccer ball',
    'category': 'Activity',
    'aliases': [
      'soccer'
    ],
    'tags': [
      'sports'
    ]
  },
  {
    'emoji': '🏀',
    'description': 'basketball',
    'category': 'Activity',
    'aliases': [
      'basketball'
    ],
    'tags': [
      'sports'
    ]
  },
  {
    'emoji': '🏈',
    'description': 'american football',
    'category': 'Activity',
    'aliases': [
      'football'
    ],
    'tags': [
      'sports'
    ]
  },
  {
    'emoji': '⚾️',
    'description': 'baseball',
    'category': 'Activity',
    'aliases': [
      'baseball'
    ],
    'tags': [
      'sports'
    ]
  },
  {
    'emoji': '🎾',
    'description': 'tennis',
    'category': 'Activity',
    'aliases': [
      'tennis'
    ],
    'tags': [
      'sports'
    ]
  },
  {
    'emoji': '🏐',
    'description': 'volleyball',
    'category': 'Activity',
    'aliases': [
      'volleyball'
    ],
    'tags': []
  },
  {
    'emoji': '🏉',
    'description': 'rugby football',
    'category': 'Activity',
    'aliases': [
      'rugby_football'
    ],
    'tags': []
  },
  {
    'emoji': '🎱',
    'description': 'pool 8 ball',
    'category': 'Activity',
    'aliases': [
      '8ball'
    ],
    'tags': [
      'pool',
      'billiards'
    ]
  },
  {
    'emoji': '🏓',
    'description': 'ping pong',
    'category': 'Activity',
    'aliases': [
      'ping_pong'
    ],
    'tags': []
  },
  {
    'emoji': '🏸',
    'description': 'badminton',
    'category': 'Activity',
    'aliases': [
      'badminton'
    ],
    'tags': []
  },
  {
    'emoji': '🥅',
    'description': 'goal net',
    'category': 'Activity',
    'aliases': [
      'goal_net'
    ],
    'tags': []
  },
  {
    'emoji': '🏒',
    'description': 'ice hockey',
    'category': 'Activity',
    'aliases': [
      'ice_hockey'
    ],
    'tags': []
  },
  {
    'emoji': '🏑',
    'description': 'field hockey',
    'category': 'Activity',
    'aliases': [
      'field_hockey'
    ],
    'tags': []
  },
  {
    'emoji': '🏏',
    'description': 'cricket',
    'category': 'Activity',
    'aliases': [
      'cricket'
    ],
    'tags': []
  },
  {
    'emoji': '⛳️',
    'description': 'flag in hole',
    'category': 'Activity',
    'aliases': [
      'golf'
    ],
    'tags': []
  },
  {
    'emoji': '🏹',
    'description': 'bow and arrow',
    'category': 'Activity',
    'aliases': [
      'bow_and_arrow'
    ],
    'tags': [
      'archery'
    ]
  },
  {
    'emoji': '🎣',
    'description': 'fishing pole',
    'category': 'Activity',
    'aliases': [
      'fishing_pole_and_fish'
    ],
    'tags': []
  },
  {
    'emoji': '🥊',
    'description': 'boxing glove',
    'category': 'Activity',
    'aliases': [
      'boxing_glove'
    ],
    'tags': []
  },
  {
    'emoji': '🥋',
    'description': 'martial arts uniform',
    'category': 'Activity',
    'aliases': [
      'martial_arts_uniform'
    ],
    'tags': []
  },
  {
    'emoji': '⛸',
    'description': 'ice skate',
    'category': 'Activity',
    'aliases': [
      'ice_skate'
    ],
    'tags': [
      'skating'
    ]
  },
  {
    'emoji': '🎿',
    'description': 'skis',
    'category': 'Activity',
    'aliases': [
      'ski'
    ],
    'tags': []
  },
  {
    'emoji': '⛷',
    'description': 'skier',
    'category': 'Activity',
    'aliases': [
      'skier'
    ],
    'tags': []
  },
  {
    'emoji': '🏂',
    'description': 'snowboarder',
    'category': 'Activity',
    'aliases': [
      'snowboarder'
    ],
    'tags': []
  },
  {
    'emoji': '🏋️‍♀️',
    'description': 'woman lifting weights',
    'category': 'Activity',
    'aliases': [
      'weight_lifting_woman'
    ],
    'tags': [
      'gym',
      'workout'
    ]
  },
  {
    'emoji': '🏋',
    'description': 'person lifting weights',
    'category': 'Activity',
    'aliases': [
      'weight_lifting_man'
    ],
    'tags': [
      'gym',
      'workout'
    ]
  },
  {
    'emoji': '🤺',
    'description': 'person fencing',
    'category': 'Activity',
    'aliases': [
      'person_fencing'
    ],
    'tags': []
  },
  {
    'emoji': '🤼‍♀',
    'description': 'women wrestling',
    'category': 'Activity',
    'aliases': [
      'women_wrestling'
    ],
    'tags': []
  },
  {
    'emoji': '🤼‍♂',
    'description': 'men wrestling',
    'category': 'Activity',
    'aliases': [
      'men_wrestling'
    ],
    'tags': []
  },
  {
    'emoji': '🤸‍♀',
    'description': 'woman cartwheeling',
    'category': 'Activity',
    'aliases': [
      'woman_cartwheeling'
    ],
    'tags': []
  },
  {
    'emoji': '🤸‍♂',
    'description': 'man cartwheeling',
    'category': 'Activity',
    'aliases': [
      'man_cartwheeling'
    ],
    'tags': []
  },
  {
    'emoji': '⛹️‍♀️',
    'description': 'woman bouncing ball',
    'category': 'Activity',
    'aliases': [
      'basketball_woman'
    ],
    'tags': []
  },
  {
    'emoji': '⛹',
    'description': 'person bouncing ball',
    'category': 'Activity',
    'aliases': [
      'basketball_man'
    ],
    'tags': []
  },
  {
    'emoji': '🤾‍♀',
    'description': 'woman playing handball',
    'category': 'Activity',
    'aliases': [
      'woman_playing_handball'
    ],
    'tags': []
  },
  {
    'emoji': '🤾‍♂',
    'description': 'man playing handball',
    'category': 'Activity',
    'aliases': [
      'man_playing_handball'
    ],
    'tags': []
  },
  {
    'emoji': '🏌️‍♀️',
    'description': 'woman golfing',
    'category': 'Activity',
    'aliases': [
      'golfing_woman'
    ],
    'tags': []
  },
  {
    'emoji': '🏌',
    'description': 'person golfing',
    'category': 'Activity',
    'aliases': [
      'golfing_man'
    ],
    'tags': []
  },
  {
    'emoji': '🏄‍♀',
    'description': 'woman surfing',
    'category': 'Activity',
    'aliases': [
      'surfing_woman'
    ],
    'tags': []
  },
  {
    'emoji': '🏄',
    'description': 'person surfing',
    'category': 'Activity',
    'aliases': [
      'surfing_man',
      'surfer'
    ],
    'tags': []
  },
  {
    'emoji': '🏊‍♀',
    'description': 'woman swimming',
    'category': 'Activity',
    'aliases': [
      'swimming_woman'
    ],
    'tags': []
  },
  {
    'emoji': '🏊',
    'description': 'person swimming',
    'category': 'Activity',
    'aliases': [
      'swimming_man',
      'swimmer'
    ],
    'tags': []
  },
  {
    'emoji': '🤽‍♀',
    'description': 'woman playing water polo',
    'category': 'Activity',
    'aliases': [
      'woman_playing_water_polo'
    ],
    'tags': []
  },
  {
    'emoji': '🤽‍♂',
    'description': 'man playing water polo',
    'category': 'Activity',
    'aliases': [
      'man_playing_water_polo'
    ],
    'tags': []
  },
  {
    'emoji': '🚣‍♀',
    'description': 'woman rowing boat',
    'category': 'Activity',
    'aliases': [
      'rowing_woman'
    ],
    'tags': []
  },
  {
    'emoji': '🚣',
    'description': 'person rowing boat',
    'category': 'Activity',
    'aliases': [
      'rowing_man',
      'rowboat'
    ],
    'tags': []
  },
  {
    'emoji': '🏇',
    'description': 'horse racing',
    'category': 'Activity',
    'aliases': [
      'horse_racing'
    ],
    'tags': []
  },
  {
    'emoji': '🚴‍♀',
    'description': 'woman biking',
    'category': 'Activity',
    'aliases': [
      'biking_woman'
    ],
    'tags': []
  },
  {
    'emoji': '🚴',
    'description': 'person biking',
    'category': 'Activity',
    'aliases': [
      'biking_man',
      'bicyclist'
    ],
    'tags': []
  },
  {
    'emoji': '🚵‍♀',
    'description': 'woman mountain biking',
    'category': 'Activity',
    'aliases': [
      'mountain_biking_woman'
    ],
    'tags': []
  },
  {
    'emoji': '🚵',
    'description': 'person mountain biking',
    'category': 'Activity',
    'aliases': [
      'mountain_biking_man',
      'mountain_bicyclist'
    ],
    'tags': []
  },
  {
    'emoji': '🎽',
    'description': 'running shirt',
    'category': 'Activity',
    'aliases': [
      'running_shirt_with_sash'
    ],
    'tags': [
      'marathon'
    ]
  },
  {
    'emoji': '🏅',
    'description': 'sports medal',
    'category': 'Activity',
    'aliases': [
      'medal_sports'
    ],
    'tags': [
      'gold',
      'winner'
    ]
  },
  {
    'emoji': '🎖',
    'description': 'military medal',
    'category': 'Activity',
    'aliases': [
      'medal_military'
    ],
    'tags': []
  },
  {
    'emoji': '🥇',
    'description': '1st place medal',
    'category': 'Activity',
    'aliases': [
      '1st_place_medal'
    ],
    'tags': [
      'gold'
    ]
  },
  {
    'emoji': '🥈',
    'description': '2nd place medal',
    'category': 'Activity',
    'aliases': [
      '2nd_place_medal'
    ],
    'tags': [
      'silver'
    ]
  },
  {
    'emoji': '🥉',
    'description': '3rd place medal',
    'category': 'Activity',
    'aliases': [
      '3rd_place_medal'
    ],
    'tags': [
      'bronze'
    ]
  },
  {
    'emoji': '🏆',
    'description': 'trophy',
    'category': 'Activity',
    'aliases': [
      'trophy'
    ],
    'tags': [
      'award',
      'contest',
      'winner'
    ]
  },
  {
    'emoji': '🏵',
    'description': 'rosette',
    'category': 'Activity',
    'aliases': [
      'rosette'
    ],
    'tags': []
  },
  {
    'emoji': '🎗',
    'description': 'reminder ribbon',
    'category': 'Activity',
    'aliases': [
      'reminder_ribbon'
    ],
    'tags': []
  },
  {
    'emoji': '🎫',
    'description': 'ticket',
    'category': 'Activity',
    'aliases': [
      'ticket'
    ],
    'tags': []
  },
  {
    'emoji': '🎟',
    'description': 'admission tickets',
    'category': 'Activity',
    'aliases': [
      'tickets'
    ],
    'tags': []
  },
  {
    'emoji': '🎪',
    'description': 'circus tent',
    'category': 'Activity',
    'aliases': [
      'circus_tent'
    ],
    'tags': []
  },
  {
    'emoji': '🤹‍♀',
    'description': 'woman juggling',
    'category': 'Activity',
    'aliases': [
      'woman_juggling'
    ],
    'tags': []
  },
  {
    'emoji': '🤹‍♂',
    'description': 'man juggling',
    'category': 'Activity',
    'aliases': [
      'man_juggling'
    ],
    'tags': []
  },
  {
    'emoji': '🎭',
    'description': 'performing arts',
    'category': 'Activity',
    'aliases': [
      'performing_arts'
    ],
    'tags': [
      'theater',
      'drama'
    ]
  },
  {
    'emoji': '🎨',
    'description': 'artist palette',
    'category': 'Activity',
    'aliases': [
      'art'
    ],
    'tags': [
      'design',
      'paint'
    ]
  },
  {
    'emoji': '🎬',
    'description': 'clapper board',
    'category': 'Activity',
    'aliases': [
      'clapper'
    ],
    'tags': [
      'film'
    ]
  },
  {
    'emoji': '🎤',
    'description': 'microphone',
    'category': 'Activity',
    'aliases': [
      'microphone'
    ],
    'tags': [
      'sing'
    ]
  },
  {
    'emoji': '🎧',
    'description': 'headphone',
    'category': 'Activity',
    'aliases': [
      'headphones'
    ],
    'tags': [
      'music',
      'earphones'
    ]
  },
  {
    'emoji': '🎼',
    'description': 'musical score',
    'category': 'Activity',
    'aliases': [
      'musical_score'
    ],
    'tags': []
  },
  {
    'emoji': '🎹',
    'description': 'musical keyboard',
    'category': 'Activity',
    'aliases': [
      'musical_keyboard'
    ],
    'tags': [
      'piano'
    ]
  },
  {
    'emoji': '🥁',
    'description': 'drum',
    'category': 'Activity',
    'aliases': [
      'drum'
    ],
    'tags': []
  },
  {
    'emoji': '🎷',
    'description': 'saxophone',
    'category': 'Activity',
    'aliases': [
      'saxophone'
    ],
    'tags': []
  },
  {
    'emoji': '🎺',
    'description': 'trumpet',
    'category': 'Activity',
    'aliases': [
      'trumpet'
    ],
    'tags': []
  },
  {
    'emoji': '🎸',
    'description': 'guitar',
    'category': 'Activity',
    'aliases': [
      'guitar'
    ],
    'tags': [
      'rock'
    ]
  },
  {
    'emoji': '🎻',
    'description': 'violin',
    'category': 'Activity',
    'aliases': [
      'violin'
    ],
    'tags': []
  },
  {
    'emoji': '🎲',
    'description': 'game die',
    'category': 'Activity',
    'aliases': [
      'game_die'
    ],
    'tags': [
      'dice',
      'gambling'
    ]
  },
  {
    'emoji': '🎯',
    'description': 'direct hit',
    'category': 'Activity',
    'aliases': [
      'dart'
    ],
    'tags': [
      'target'
    ]
  },
  {
    'emoji': '🎳',
    'description': 'bowling',
    'category': 'Activity',
    'aliases': [
      'bowling'
    ],
    'tags': []
  },
  {
    'emoji': '🎮',
    'description': 'video game',
    'category': 'Activity',
    'aliases': [
      'video_game'
    ],
    'tags': [
      'play',
      'controller',
      'console'
    ]
  },
  {
    'emoji': '🎰',
    'description': 'slot machine',
    'category': 'Activity',
    'aliases': [
      'slot_machine'
    ],
    'tags': []
  },
  {
    'emoji': '🚗',
    'description': 'automobile',
    'category': 'Places',
    'aliases': [
      'car',
      'red_car'
    ],
    'tags': []
  },
  {
    'emoji': '🚕',
    'description': 'taxi',
    'category': 'Places',
    'aliases': [
      'taxi'
    ],
    'tags': []
  },
  {
    'emoji': '🚙',
    'description': 'sport utility vehicle',
    'category': 'Places',
    'aliases': [
      'blue_car'
    ],
    'tags': []
  },
  {
    'emoji': '🚌',
    'description': 'bus',
    'category': 'Places',
    'aliases': [
      'bus'
    ],
    'tags': []
  },
  {
    'emoji': '🚎',
    'description': 'trolleybus',
    'category': 'Places',
    'aliases': [
      'trolleybus'
    ],
    'tags': []
  },
  {
    'emoji': '🏎',
    'description': 'racing car',
    'category': 'Places',
    'aliases': [
      'racing_car'
    ],
    'tags': []
  },
  {
    'emoji': '🚓',
    'description': 'police car',
    'category': 'Places',
    'aliases': [
      'police_car'
    ],
    'tags': []
  },
  {
    'emoji': '🚑',
    'description': 'ambulance',
    'category': 'Places',
    'aliases': [
      'ambulance'
    ],
    'tags': []
  },
  {
    'emoji': '🚒',
    'description': 'fire engine',
    'category': 'Places',
    'aliases': [
      'fire_engine'
    ],
    'tags': []
  },
  {
    'emoji': '🚐',
    'description': 'minibus',
    'category': 'Places',
    'aliases': [
      'minibus'
    ],
    'tags': []
  },
  {
    'emoji': '🚚',
    'description': 'delivery truck',
    'category': 'Places',
    'aliases': [
      'truck'
    ],
    'tags': []
  },
  {
    'emoji': '🚛',
    'description': 'articulated lorry',
    'category': 'Places',
    'aliases': [
      'articulated_lorry'
    ],
    'tags': []
  },
  {
    'emoji': '🚜',
    'description': 'tractor',
    'category': 'Places',
    'aliases': [
      'tractor'
    ],
    'tags': []
  },
  {
    'emoji': '🛴',
    'description': 'kick scooter',
    'category': 'Places',
    'aliases': [
      'kick_scooter'
    ],
    'tags': []
  },
  {
    'emoji': '🚲',
    'description': 'bicycle',
    'category': 'Places',
    'aliases': [
      'bike'
    ],
    'tags': [
      'bicycle'
    ]
  },
  {
    'emoji': '🛵',
    'description': 'motor scooter',
    'category': 'Places',
    'aliases': [
      'motor_scooter'
    ],
    'tags': []
  },
  {
    'emoji': '🏍',
    'description': 'motorcycle',
    'category': 'Places',
    'aliases': [
      'motorcycle'
    ],
    'tags': []
  },
  {
    'emoji': '🚨',
    'description': 'police car light',
    'category': 'Places',
    'aliases': [
      'rotating_light'
    ],
    'tags': [
      '911',
      'emergency'
    ]
  },
  {
    'emoji': '🚔',
    'description': 'oncoming police car',
    'category': 'Places',
    'aliases': [
      'oncoming_police_car'
    ],
    'tags': []
  },
  {
    'emoji': '🚍',
    'description': 'oncoming bus',
    'category': 'Places',
    'aliases': [
      'oncoming_bus'
    ],
    'tags': []
  },
  {
    'emoji': '🚘',
    'description': 'oncoming automobile',
    'category': 'Places',
    'aliases': [
      'oncoming_automobile'
    ],
    'tags': []
  },
  {
    'emoji': '🚖',
    'description': 'oncoming taxi',
    'category': 'Places',
    'aliases': [
      'oncoming_taxi'
    ],
    'tags': []
  },
  {
    'emoji': '🚡',
    'description': 'aerial tramway',
    'category': 'Places',
    'aliases': [
      'aerial_tramway'
    ],
    'tags': []
  },
  {
    'emoji': '🚠',
    'description': 'mountain cableway',
    'category': 'Places',
    'aliases': [
      'mountain_cableway'
    ],
    'tags': []
  },
  {
    'emoji': '🚟',
    'description': 'suspension railway',
    'category': 'Places',
    'aliases': [
      'suspension_railway'
    ],
    'tags': []
  },
  {
    'emoji': '🚃',
    'description': 'railway car',
    'category': 'Places',
    'aliases': [
      'railway_car'
    ],
    'tags': []
  },
  {
    'emoji': '🚋',
    'description': 'tram car',
    'category': 'Places',
    'aliases': [
      'train'
    ],
    'tags': []
  },
  {
    'emoji': '🚞',
    'description': 'mountain railway',
    'category': 'Places',
    'aliases': [
      'mountain_railway'
    ],
    'tags': []
  },
  {
    'emoji': '🚝',
    'description': 'monorail',
    'category': 'Places',
    'aliases': [
      'monorail'
    ],
    'tags': []
  },
  {
    'emoji': '🚄',
    'description': 'high-speed train',
    'category': 'Places',
    'aliases': [
      'bullettrain_side'
    ],
    'tags': [
      'train'
    ]
  },
  {
    'emoji': '🚅',
    'description': 'high-speed train with bullet nose',
    'category': 'Places',
    'aliases': [
      'bullettrain_front'
    ],
    'tags': [
      'train'
    ]
  },
  {
    'emoji': '🚈',
    'description': 'light rail',
    'category': 'Places',
    'aliases': [
      'light_rail'
    ],
    'tags': []
  },
  {
    'emoji': '🚂',
    'description': 'locomotive',
    'category': 'Places',
    'aliases': [
      'steam_locomotive'
    ],
    'tags': [
      'train'
    ]
  },
  {
    'emoji': '🚆',
    'description': 'train',
    'category': 'Places',
    'aliases': [
      'train2'
    ],
    'tags': []
  },
  {
    'emoji': '🚇',
    'description': 'metro',
    'category': 'Places',
    'aliases': [
      'metro'
    ],
    'tags': []
  },
  {
    'emoji': '🚊',
    'description': 'tram',
    'category': 'Places',
    'aliases': [
      'tram'
    ],
    'tags': []
  },
  {
    'emoji': '🚉',
    'description': 'station',
    'category': 'Places',
    'aliases': [
      'station'
    ],
    'tags': []
  },
  {
    'emoji': '🚁',
    'description': 'helicopter',
    'category': 'Places',
    'aliases': [
      'helicopter'
    ],
    'tags': []
  },
  {
    'emoji': '🛩',
    'description': 'small airplane',
    'category': 'Places',
    'aliases': [
      'small_airplane'
    ],
    'tags': [
      'flight'
    ]
  },
  {
    'emoji': '✈️',
    'description': 'airplane',
    'category': 'Places',
    'aliases': [
      'airplane'
    ],
    'tags': [
      'flight'
    ]
  },
  {
    'emoji': '🛫',
    'description': 'airplane departure',
    'category': 'Places',
    'aliases': [
      'flight_departure'
    ],
    'tags': []
  },
  {
    'emoji': '🛬',
    'description': 'airplane arrival',
    'category': 'Places',
    'aliases': [
      'flight_arrival'
    ],
    'tags': []
  },
  {
    'emoji': '🚀',
    'description': 'rocket',
    'category': 'Places',
    'aliases': [
      'rocket'
    ],
    'tags': [
      'ship',
      'launch'
    ]
  },
  {
    'emoji': '🛰',
    'description': 'satellite',
    'category': 'Places',
    'aliases': [
      'artificial_satellite'
    ],
    'tags': [
      'orbit',
      'space'
    ]
  },
  {
    'emoji': '💺',
    'description': 'seat',
    'category': 'Places',
    'aliases': [
      'seat'
    ],
    'tags': []
  },
  {
    'emoji': '🛶',
    'description': 'canoe',
    'category': 'Places',
    'aliases': [
      'canoe'
    ],
    'tags': []
  },
  {
    'emoji': '⛵️',
    'description': 'sailboat',
    'category': 'Places',
    'aliases': [
      'boat',
      'sailboat'
    ],
    'tags': []
  },
  {
    'emoji': '🛥',
    'description': 'motor boat',
    'category': 'Places',
    'aliases': [
      'motor_boat'
    ],
    'tags': []
  },
  {
    'emoji': '🚤',
    'description': 'speedboat',
    'category': 'Places',
    'aliases': [
      'speedboat'
    ],
    'tags': [
      'ship'
    ]
  },
  {
    'emoji': '🛳',
    'description': 'passenger ship',
    'category': 'Places',
    'aliases': [
      'passenger_ship'
    ],
    'tags': [
      'cruise'
    ]
  },
  {
    'emoji': '⛴',
    'description': 'ferry',
    'category': 'Places',
    'aliases': [
      'ferry'
    ],
    'tags': []
  },
  {
    'emoji': '🚢',
    'description': 'ship',
    'category': 'Places',
    'aliases': [
      'ship'
    ],
    'tags': []
  },
  {
    'emoji': '⚓️',
    'description': 'anchor',
    'category': 'Places',
    'aliases': [
      'anchor'
    ],
    'tags': [
      'ship'
    ]
  },
  {
    'emoji': '🚧',
    'description': 'construction',
    'category': 'Places',
    'aliases': [
      'construction'
    ],
    'tags': [
      'wip'
    ]
  },
  {
    'emoji': '⛽️',
    'description': 'fuel pump',
    'category': 'Places',
    'aliases': [
      'fuelpump'
    ],
    'tags': []
  },
  {
    'emoji': '🚏',
    'description': 'bus stop',
    'category': 'Places',
    'aliases': [
      'busstop'
    ],
    'tags': []
  },
  {
    'emoji': '🚦',
    'description': 'vertical traffic light',
    'category': 'Places',
    'aliases': [
      'vertical_traffic_light'
    ],
    'tags': [
      'semaphore'
    ]
  },
  {
    'emoji': '🚥',
    'description': 'horizontal traffic light',
    'category': 'Places',
    'aliases': [
      'traffic_light'
    ],
    'tags': []
  },
  {
    'emoji': '🗺',
    'description': 'world map',
    'category': 'Places',
    'aliases': [
      'world_map'
    ],
    'tags': [
      'travel'
    ]
  },
  {
    'emoji': '🗿',
    'description': 'moai',
    'category': 'Places',
    'aliases': [
      'moyai'
    ],
    'tags': [
      'stone'
    ]
  },
  {
    'emoji': '🗽',
    'description': 'Statue of Liberty',
    'category': 'Places',
    'aliases': [
      'statue_of_liberty'
    ],
    'tags': []
  },
  {
    'emoji': '⛲️',
    'description': 'fountain',
    'category': 'Places',
    'aliases': [
      'fountain'
    ],
    'tags': []
  },
  {
    'emoji': '🗼',
    'description': 'Tokyo tower',
    'category': 'Places',
    'aliases': [
      'tokyo_tower'
    ],
    'tags': []
  },
  {
    'emoji': '🏰',
    'description': 'castle',
    'category': 'Places',
    'aliases': [
      'european_castle'
    ],
    'tags': []
  },
  {
    'emoji': '🏯',
    'description': 'Japanese castle',
    'category': 'Places',
    'aliases': [
      'japanese_castle'
    ],
    'tags': []
  },
  {
    'emoji': '🏟',
    'description': 'stadium',
    'category': 'Places',
    'aliases': [
      'stadium'
    ],
    'tags': []
  },
  {
    'emoji': '🎡',
    'description': 'ferris wheel',
    'category': 'Places',
    'aliases': [
      'ferris_wheel'
    ],
    'tags': []
  },
  {
    'emoji': '🎢',
    'description': 'roller coaster',
    'category': 'Places',
    'aliases': [
      'roller_coaster'
    ],
    'tags': []
  },
  {
    'emoji': '🎠',
    'description': 'carousel horse',
    'category': 'Places',
    'aliases': [
      'carousel_horse'
    ],
    'tags': []
  },
  {
    'emoji': '⛱',
    'description': 'umbrella on ground',
    'category': 'Places',
    'aliases': [
      'parasol_on_ground'
    ],
    'tags': [
      'beach_umbrella'
    ]
  },
  {
    'emoji': '🏖',
    'description': 'beach with umbrella',
    'category': 'Places',
    'aliases': [
      'beach_umbrella'
    ],
    'tags': []
  },
  {
    'emoji': '🏝',
    'description': 'desert island',
    'category': 'Places',
    'aliases': [
      'desert_island'
    ],
    'tags': []
  },
  {
    'emoji': '⛰',
    'description': 'mountain',
    'category': 'Places',
    'aliases': [
      'mountain'
    ],
    'tags': []
  },
  {
    'emoji': '🏔',
    'description': 'snow-capped mountain',
    'category': 'Places',
    'aliases': [
      'mountain_snow'
    ],
    'tags': []
  },
  {
    'emoji': '🗻',
    'description': 'mount fuji',
    'category': 'Places',
    'aliases': [
      'mount_fuji'
    ],
    'tags': []
  },
  {
    'emoji': '🌋',
    'description': 'volcano',
    'category': 'Places',
    'aliases': [
      'volcano'
    ],
    'tags': []
  },
  {
    'emoji': '🏜',
    'description': 'desert',
    'category': 'Places',
    'aliases': [
      'desert'
    ],
    'tags': []
  },
  {
    'emoji': '🏕',
    'description': 'camping',
    'category': 'Places',
    'aliases': [
      'camping'
    ],
    'tags': []
  },
  {
    'emoji': '⛺️',
    'description': 'tent',
    'category': 'Places',
    'aliases': [
      'tent'
    ],
    'tags': [
      'camping'
    ]
  },
  {
    'emoji': '🛤',
    'description': 'railway track',
    'category': 'Places',
    'aliases': [
      'railway_track'
    ],
    'tags': []
  },
  {
    'emoji': '🛣',
    'description': 'motorway',
    'category': 'Places',
    'aliases': [
      'motorway'
    ],
    'tags': []
  },
  {
    'emoji': '🏗',
    'description': 'building construction',
    'category': 'Places',
    'aliases': [
      'building_construction'
    ],
    'tags': []
  },
  {
    'emoji': '🏭',
    'description': 'factory',
    'category': 'Places',
    'aliases': [
      'factory'
    ],
    'tags': []
  },
  {
    'emoji': '🏠',
    'description': 'house',
    'category': 'Places',
    'aliases': [
      'house'
    ],
    'tags': []
  },
  {
    'emoji': '🏡',
    'description': 'house with garden',
    'category': 'Places',
    'aliases': [
      'house_with_garden'
    ],
    'tags': []
  },
  {
    'emoji': '🏘',
    'description': 'house',
    'category': 'Places',
    'aliases': [
      'houses'
    ],
    'tags': []
  },
  {
    'emoji': '🏚',
    'description': 'derelict house',
    'category': 'Places',
    'aliases': [
      'derelict_house'
    ],
    'tags': []
  },
  {
    'emoji': '🏢',
    'description': 'office building',
    'category': 'Places',
    'aliases': [
      'office'
    ],
    'tags': []
  },
  {
    'emoji': '🏬',
    'description': 'department store',
    'category': 'Places',
    'aliases': [
      'department_store'
    ],
    'tags': []
  },
  {
    'emoji': '🏣',
    'description': 'Japanese post office',
    'category': 'Places',
    'aliases': [
      'post_office'
    ],
    'tags': []
  },
  {
    'emoji': '🏤',
    'description': 'post office',
    'category': 'Places',
    'aliases': [
      'european_post_office'
    ],
    'tags': []
  },
  {
    'emoji': '🏥',
    'description': 'hospital',
    'category': 'Places',
    'aliases': [
      'hospital'
    ],
    'tags': []
  },
  {
    'emoji': '🏦',
    'description': 'bank',
    'category': 'Places',
    'aliases': [
      'bank'
    ],
    'tags': []
  },
  {
    'emoji': '🏨',
    'description': 'hotel',
    'category': 'Places',
    'aliases': [
      'hotel'
    ],
    'tags': []
  },
  {
    'emoji': '🏪',
    'description': 'convenience store',
    'category': 'Places',
    'aliases': [
      'convenience_store'
    ],
    'tags': []
  },
  {
    'emoji': '🏫',
    'description': 'school',
    'category': 'Places',
    'aliases': [
      'school'
    ],
    'tags': []
  },
  {
    'emoji': '🏩',
    'description': 'love hotel',
    'category': 'Places',
    'aliases': [
      'love_hotel'
    ],
    'tags': []
  },
  {
    'emoji': '💒',
    'description': 'wedding',
    'category': 'Places',
    'aliases': [
      'wedding'
    ],
    'tags': [
      'marriage'
    ]
  },
  {
    'emoji': '🏛',
    'description': 'classical building',
    'category': 'Places',
    'aliases': [
      'classical_building'
    ],
    'tags': []
  },
  {
    'emoji': '⛪️',
    'description': 'church',
    'category': 'Places',
    'aliases': [
      'church'
    ],
    'tags': []
  },
  {
    'emoji': '🕌',
    'description': 'mosque',
    'category': 'Places',
    'aliases': [
      'mosque'
    ],
    'tags': []
  },
  {
    'emoji': '🕍',
    'description': 'synagogue',
    'category': 'Places',
    'aliases': [
      'synagogue'
    ],
    'tags': []
  },
  {
    'emoji': '🕋',
    'description': 'kaaba',
    'category': 'Places',
    'aliases': [
      'kaaba'
    ],
    'tags': []
  },
  {
    'emoji': '⛩',
    'description': 'shinto shrine',
    'category': 'Places',
    'aliases': [
      'shinto_shrine'
    ],
    'tags': []
  },
  {
    'emoji': '🗾',
    'description': 'map of Japan',
    'category': 'Places',
    'aliases': [
      'japan'
    ],
    'tags': []
  },
  {
    'emoji': '🎑',
    'description': 'moon viewing ceremony',
    'category': 'Places',
    'aliases': [
      'rice_scene'
    ],
    'tags': []
  },
  {
    'emoji': '🏞',
    'description': 'national park',
    'category': 'Places',
    'aliases': [
      'national_park'
    ],
    'tags': []
  },
  {
    'emoji': '🌅',
    'description': 'sunrise',
    'category': 'Places',
    'aliases': [
      'sunrise'
    ],
    'tags': []
  },
  {
    'emoji': '🌄',
    'description': 'sunrise over mountains',
    'category': 'Places',
    'aliases': [
      'sunrise_over_mountains'
    ],
    'tags': []
  },
  {
    'emoji': '🌠',
    'description': 'shooting star',
    'category': 'Places',
    'aliases': [
      'stars'
    ],
    'tags': []
  },
  {
    'emoji': '🎇',
    'description': 'sparkler',
    'category': 'Places',
    'aliases': [
      'sparkler'
    ],
    'tags': []
  },
  {
    'emoji': '🎆',
    'description': 'fireworks',
    'category': 'Places',
    'aliases': [
      'fireworks'
    ],
    'tags': [
      'festival',
      'celebration'
    ]
  },
  {
    'emoji': '🌇',
    'description': 'sunset',
    'category': 'Places',
    'aliases': [
      'city_sunrise'
    ],
    'tags': []
  },
  {
    'emoji': '🌆',
    'description': 'cityscape at dusk',
    'category': 'Places',
    'aliases': [
      'city_sunset'
    ],
    'tags': []
  },
  {
    'emoji': '🏙',
    'description': 'cityscape',
    'category': 'Places',
    'aliases': [
      'cityscape'
    ],
    'tags': [
      'skyline'
    ]
  },
  {
    'emoji': '🌃',
    'description': 'night with stars',
    'category': 'Places',
    'aliases': [
      'night_with_stars'
    ],
    'tags': []
  },
  {
    'emoji': '🌌',
    'description': 'milky way',
    'category': 'Places',
    'aliases': [
      'milky_way'
    ],
    'tags': []
  },
  {
    'emoji': '🌉',
    'description': 'bridge at night',
    'category': 'Places',
    'aliases': [
      'bridge_at_night'
    ],
    'tags': []
  },
  {
    'emoji': '🌁',
    'description': 'foggy',
    'category': 'Places',
    'aliases': [
      'foggy'
    ],
    'tags': [
      'karl'
    ]
  },
  {
    'emoji': '⌚️',
    'description': 'watch',
    'category': 'Objects',
    'aliases': [
      'watch'
    ],
    'tags': [
      'time'
    ]
  },
  {
    'emoji': '📱',
    'description': 'mobile phone',
    'category': 'Objects',
    'aliases': [
      'iphone'
    ],
    'tags': [
      'smartphone',
      'mobile'
    ]
  },
  {
    'emoji': '📲',
    'description': 'mobile phone with arrow',
    'category': 'Objects',
    'aliases': [
      'calling'
    ],
    'tags': [
      'call',
      'incoming'
    ]
  },
  {
    'emoji': '💻',
    'description': 'laptop computer',
    'category': 'Objects',
    'aliases': [
      'computer'
    ],
    'tags': [
      'desktop',
      'screen'
    ]
  },
  {
    'emoji': '⌨️',
    'description': 'keyboard',
    'category': 'Objects',
    'aliases': [
      'keyboard'
    ],
    'tags': []
  },
  {
    'emoji': '🖥',
    'description': 'desktop computer',
    'category': 'Objects',
    'aliases': [
      'desktop_computer'
    ],
    'tags': []
  },
  {
    'emoji': '🖨',
    'description': 'printer',
    'category': 'Objects',
    'aliases': [
      'printer'
    ],
    'tags': []
  },
  {
    'emoji': '🖱',
    'description': 'computer mouse',
    'category': 'Objects',
    'aliases': [
      'computer_mouse'
    ],
    'tags': []
  },
  {
    'emoji': '🖲',
    'description': 'trackball',
    'category': 'Objects',
    'aliases': [
      'trackball'
    ],
    'tags': []
  },
  {
    'emoji': '🕹',
    'description': 'joystick',
    'category': 'Objects',
    'aliases': [
      'joystick'
    ],
    'tags': []
  },
  {
    'emoji': '🗜',
    'description': 'clamp',
    'category': 'Objects',
    'aliases': [
      'clamp'
    ],
    'tags': []
  },
  {
    'emoji': '💽',
    'description': 'computer disk',
    'category': 'Objects',
    'aliases': [
      'minidisc'
    ],
    'tags': []
  },
  {
    'emoji': '💾',
    'description': 'floppy disk',
    'category': 'Objects',
    'aliases': [
      'floppy_disk'
    ],
    'tags': [
      'save'
    ]
  },
  {
    'emoji': '💿',
    'description': 'optical disk',
    'category': 'Objects',
    'aliases': [
      'cd'
    ],
    'tags': []
  },
  {
    'emoji': '📀',
    'description': 'dvd',
    'category': 'Objects',
    'aliases': [
      'dvd'
    ],
    'tags': []
  },
  {
    'emoji': '📼',
    'description': 'videocassette',
    'category': 'Objects',
    'aliases': [
      'vhs'
    ],
    'tags': []
  },
  {
    'emoji': '📷',
    'description': 'camera',
    'category': 'Objects',
    'aliases': [
      'camera'
    ],
    'tags': [
      'photo'
    ]
  },
  {
    'emoji': '📸',
    'description': 'camera with flash',
    'category': 'Objects',
    'aliases': [
      'camera_flash'
    ],
    'tags': [
      'photo'
    ]
  },
  {
    'emoji': '📹',
    'description': 'video camera',
    'category': 'Objects',
    'aliases': [
      'video_camera'
    ],
    'tags': []
  },
  {
    'emoji': '🎥',
    'description': 'movie camera',
    'category': 'Objects',
    'aliases': [
      'movie_camera'
    ],
    'tags': [
      'film',
      'video'
    ]
  },
  {
    'emoji': '📽',
    'description': 'film projector',
    'category': 'Objects',
    'aliases': [
      'film_projector'
    ],
    'tags': []
  },
  {
    'emoji': '🎞',
    'description': 'film frames',
    'category': 'Objects',
    'aliases': [
      'film_strip'
    ],
    'tags': []
  },
  {
    'emoji': '📞',
    'description': 'telephone receiver',
    'category': 'Objects',
    'aliases': [
      'telephone_receiver'
    ],
    'tags': [
      'phone',
      'call'
    ]
  },
  {
    'emoji': '☎️',
    'description': 'telephone',
    'category': 'Objects',
    'aliases': [
      'phone',
      'telephone'
    ],
    'tags': []
  },
  {
    'emoji': '📟',
    'description': 'pager',
    'category': 'Objects',
    'aliases': [
      'pager'
    ],
    'tags': []
  },
  {
    'emoji': '📠',
    'description': 'fax machine',
    'category': 'Objects',
    'aliases': [
      'fax'
    ],
    'tags': []
  },
  {
    'emoji': '📺',
    'description': 'television',
    'category': 'Objects',
    'aliases': [
      'tv'
    ],
    'tags': []
  },
  {
    'emoji': '📻',
    'description': 'radio',
    'category': 'Objects',
    'aliases': [
      'radio'
    ],
    'tags': [
      'podcast'
    ]
  },
  {
    'emoji': '🎙',
    'description': 'studio microphone',
    'category': 'Objects',
    'aliases': [
      'studio_microphone'
    ],
    'tags': [
      'podcast'
    ]
  },
  {
    'emoji': '🎚',
    'description': 'level slider',
    'category': 'Objects',
    'aliases': [
      'level_slider'
    ],
    'tags': []
  },
  {
    'emoji': '🎛',
    'description': 'control knobs',
    'category': 'Objects',
    'aliases': [
      'control_knobs'
    ],
    'tags': []
  },
  {
    'emoji': '⏱',
    'description': 'stopwatch',
    'category': 'Objects',
    'aliases': [
      'stopwatch'
    ],
    'tags': []
  },
  {
    'emoji': '⏲',
    'description': 'timer clock',
    'category': 'Objects',
    'aliases': [
      'timer_clock'
    ],
    'tags': []
  },
  {
    'emoji': '⏰',
    'description': 'alarm clock',
    'category': 'Objects',
    'aliases': [
      'alarm_clock'
    ],
    'tags': [
      'morning'
    ]
  },
  {
    'emoji': '🕰',
    'description': 'mantelpiece clock',
    'category': 'Objects',
    'aliases': [
      'mantelpiece_clock'
    ],
    'tags': []
  },
  {
    'emoji': '⌛️',
    'description': 'hourglass',
    'category': 'Objects',
    'aliases': [
      'hourglass'
    ],
    'tags': [
      'time'
    ]
  },
  {
    'emoji': '⏳',
    'description': 'hourglass with flowing sand',
    'category': 'Objects',
    'aliases': [
      'hourglass_flowing_sand'
    ],
    'tags': [
      'time'
    ]
  },
  {
    'emoji': '📡',
    'description': 'satellite antenna',
    'category': 'Objects',
    'aliases': [
      'satellite'
    ],
    'tags': [
      'signal'
    ]
  },
  {
    'emoji': '🔋',
    'description': 'battery',
    'category': 'Objects',
    'aliases': [
      'battery'
    ],
    'tags': [
      'power'
    ]
  },
  {
    'emoji': '🔌',
    'description': 'electric plug',
    'category': 'Objects',
    'aliases': [
      'electric_plug'
    ],
    'tags': []
  },
  {
    'emoji': '💡',
    'description': 'light bulb',
    'category': 'Objects',
    'aliases': [
      'bulb'
    ],
    'tags': [
      'idea',
      'light'
    ]
  },
  {
    'emoji': '🔦',
    'description': 'flashlight',
    'category': 'Objects',
    'aliases': [
      'flashlight'
    ],
    'tags': []
  },
  {
    'emoji': '🕯',
    'description': 'candle',
    'category': 'Objects',
    'aliases': [
      'candle'
    ],
    'tags': []
  },
  {
    'emoji': '🗑',
    'description': 'wastebasket',
    'category': 'Objects',
    'aliases': [
      'wastebasket'
    ],
    'tags': [
      'trash'
    ]
  },
  {
    'emoji': '🛢',
    'description': 'oil drum',
    'category': 'Objects',
    'aliases': [
      'oil_drum'
    ],
    'tags': []
  },
  {
    'emoji': '💸',
    'description': 'money with wings',
    'category': 'Objects',
    'aliases': [
      'money_with_wings'
    ],
    'tags': [
      'dollar'
    ]
  },
  {
    'emoji': '💵',
    'description': 'dollar banknote',
    'category': 'Objects',
    'aliases': [
      'dollar'
    ],
    'tags': [
      'money'
    ]
  },
  {
    'emoji': '💴',
    'description': 'yen banknote',
    'category': 'Objects',
    'aliases': [
      'yen'
    ],
    'tags': []
  },
  {
    'emoji': '💶',
    'description': 'euro banknote',
    'category': 'Objects',
    'aliases': [
      'euro'
    ],
    'tags': []
  },
  {
    'emoji': '💷',
    'description': 'pound banknote',
    'category': 'Objects',
    'aliases': [
      'pound'
    ],
    'tags': []
  },
  {
    'emoji': '💰',
    'description': 'money bag',
    'category': 'Objects',
    'aliases': [
      'moneybag'
    ],
    'tags': [
      'dollar',
      'cream'
    ]
  },
  {
    'emoji': '💳',
    'description': 'credit card',
    'category': 'Objects',
    'aliases': [
      'credit_card'
    ],
    'tags': [
      'subscription'
    ]
  },
  {
    'emoji': '💎',
    'description': 'gem stone',
    'category': 'Objects',
    'aliases': [
      'gem'
    ],
    'tags': [
      'diamond'
    ]
  },
  {
    'emoji': '⚖️',
    'description': 'balance scale',
    'category': 'Objects',
    'aliases': [
      'balance_scale'
    ],
    'tags': []
  },
  {
    'emoji': '🔧',
    'description': 'wrench',
    'category': 'Objects',
    'aliases': [
      'wrench'
    ],
    'tags': [
      'tool'
    ]
  },
  {
    'emoji': '🔨',
    'description': 'hammer',
    'category': 'Objects',
    'aliases': [
      'hammer'
    ],
    'tags': [
      'tool'
    ]
  },
  {
    'emoji': '⚒',
    'description': 'hammer and pick',
    'category': 'Objects',
    'aliases': [
      'hammer_and_pick'
    ],
    'tags': []
  },
  {
    'emoji': '🛠',
    'description': 'hammer and wrench',
    'category': 'Objects',
    'aliases': [
      'hammer_and_wrench'
    ],
    'tags': []
  },
  {
    'emoji': '⛏',
    'description': 'pick',
    'category': 'Objects',
    'aliases': [
      'pick'
    ],
    'tags': []
  },
  {
    'emoji': '🔩',
    'description': 'nut and bolt',
    'category': 'Objects',
    'aliases': [
      'nut_and_bolt'
    ],
    'tags': []
  },
  {
    'emoji': '⚙️',
    'description': 'gear',
    'category': 'Objects',
    'aliases': [
      'gear'
    ],
    'tags': []
  },
  {
    'emoji': '⛓',
    'description': 'chains',
    'category': 'Objects',
    'aliases': [
      'chains'
    ],
    'tags': []
  },
  {
    'emoji': '🔫',
    'description': 'pistol',
    'category': 'Objects',
    'aliases': [
      'gun'
    ],
    'tags': [
      'shoot',
      'weapon'
    ]
  },
  {
    'emoji': '💣',
    'description': 'bomb',
    'category': 'Objects',
    'aliases': [
      'bomb'
    ],
    'tags': [
      'boom'
    ]
  },
  {
    'emoji': '🔪',
    'description': 'kitchen knife',
    'category': 'Objects',
    'aliases': [
      'hocho',
      'knife'
    ],
    'tags': [
      'cut',
      'chop'
    ]
  },
  {
    'emoji': '🗡',
    'description': 'dagger',
    'category': 'Objects',
    'aliases': [
      'dagger'
    ],
    'tags': []
  },
  {
    'emoji': '⚔️',
    'description': 'crossed swords',
    'category': 'Objects',
    'aliases': [
      'crossed_swords'
    ],
    'tags': []
  },
  {
    'emoji': '🛡',
    'description': 'shield',
    'category': 'Objects',
    'aliases': [
      'shield'
    ],
    'tags': []
  },
  {
    'emoji': '🚬',
    'description': 'cigarette',
    'category': 'Objects',
    'aliases': [
      'smoking'
    ],
    'tags': [
      'cigarette'
    ]
  },
  {
    'emoji': '⚰️',
    'description': 'coffin',
    'category': 'Objects',
    'aliases': [
      'coffin'
    ],
    'tags': [
      'funeral'
    ]
  },
  {
    'emoji': '⚱️',
    'description': 'funeral urn',
    'category': 'Objects',
    'aliases': [
      'funeral_urn'
    ],
    'tags': []
  },
  {
    'emoji': '🏺',
    'description': 'amphora',
    'category': 'Objects',
    'aliases': [
      'amphora'
    ],
    'tags': []
  },
  {
    'emoji': '🔮',
    'description': 'crystal ball',
    'category': 'Objects',
    'aliases': [
      'crystal_ball'
    ],
    'tags': [
      'fortune'
    ]
  },
  {
    'emoji': '📿',
    'description': 'prayer beads',
    'category': 'Objects',
    'aliases': [
      'prayer_beads'
    ],
    'tags': []
  },
  {
    'emoji': '💈',
    'description': 'barber pole',
    'category': 'Objects',
    'aliases': [
      'barber'
    ],
    'tags': []
  },
  {
    'emoji': '⚗️',
    'description': 'alembic',
    'category': 'Objects',
    'aliases': [
      'alembic'
    ],
    'tags': []
  },
  {
    'emoji': '🔭',
    'description': 'telescope',
    'category': 'Objects',
    'aliases': [
      'telescope'
    ],
    'tags': []
  },
  {
    'emoji': '🔬',
    'description': 'microscope',
    'category': 'Objects',
    'aliases': [
      'microscope'
    ],
    'tags': [
      'science',
      'laboratory',
      'investigate'
    ]
  },
  {
    'emoji': '🕳',
    'description': 'hole',
    'category': 'Objects',
    'aliases': [
      'hole'
    ],
    'tags': []
  },
  {
    'emoji': '💊',
    'description': 'pill',
    'category': 'Objects',
    'aliases': [
      'pill'
    ],
    'tags': [
      'health',
      'medicine'
    ]
  },
  {
    'emoji': '💉',
    'description': 'syringe',
    'category': 'Objects',
    'aliases': [
      'syringe'
    ],
    'tags': [
      'health',
      'hospital',
      'needle'
    ]
  },
  {
    'emoji': '🌡',
    'description': 'thermometer',
    'category': 'Objects',
    'aliases': [
      'thermometer'
    ],
    'tags': []
  },
  {
    'emoji': '🚽',
    'description': 'toilet',
    'category': 'Objects',
    'aliases': [
      'toilet'
    ],
    'tags': [
      'wc'
    ]
  },
  {
    'emoji': '🚰',
    'description': 'potable water',
    'category': 'Objects',
    'aliases': [
      'potable_water'
    ],
    'tags': []
  },
  {
    'emoji': '🚿',
    'description': 'shower',
    'category': 'Objects',
    'aliases': [
      'shower'
    ],
    'tags': [
      'bath'
    ]
  },
  {
    'emoji': '🛁',
    'description': 'bathtub',
    'category': 'Objects',
    'aliases': [
      'bathtub'
    ],
    'tags': []
  },
  {
    'emoji': '🛀',
    'description': 'person taking bath',
    'category': 'Objects',
    'aliases': [
      'bath'
    ],
    'tags': [
      'shower'
    ]
  },
  {
    'emoji': '🛎',
    'description': 'bellhop bell',
    'category': 'Objects',
    'aliases': [
      'bellhop_bell'
    ],
    'tags': []
  },
  {
    'emoji': '🔑',
    'description': 'key',
    'category': 'Objects',
    'aliases': [
      'key'
    ],
    'tags': [
      'lock',
      'password'
    ]
  },
  {
    'emoji': '🗝',
    'description': 'old key',
    'category': 'Objects',
    'aliases': [
      'old_key'
    ],
    'tags': []
  },
  {
    'emoji': '🚪',
    'description': 'door',
    'category': 'Objects',
    'aliases': [
      'door'
    ],
    'tags': []
  },
  {
    'emoji': '🛋',
    'description': 'couch and lamp',
    'category': 'Objects',
    'aliases': [
      'couch_and_lamp'
    ],
    'tags': []
  },
  {
    'emoji': '🛏',
    'description': 'bed',
    'category': 'Objects',
    'aliases': [
      'bed'
    ],
    'tags': []
  },
  {
    'emoji': '🛌',
    'description': 'person in bed',
    'category': 'Objects',
    'aliases': [
      'sleeping_bed'
    ],
    'tags': []
  },
  {
    'emoji': '🖼',
    'description': 'framed picture',
    'category': 'Objects',
    'aliases': [
      'framed_picture'
    ],
    'tags': []
  },
  {
    'emoji': '🛍',
    'description': 'shopping bags',
    'category': 'Objects',
    'aliases': [
      'shopping'
    ],
    'tags': [
      'bags'
    ]
  },
  {
    'emoji': '🛒',
    'description': 'shopping cart',
    'category': 'Objects',
    'aliases': [
      'shopping_cart'
    ],
    'tags': []
  },
  {
    'emoji': '🎁',
    'description': 'wrapped gift',
    'category': 'Objects',
    'aliases': [
      'gift'
    ],
    'tags': [
      'present',
      'birthday',
      'christmas'
    ]
  },
  {
    'emoji': '🎈',
    'description': 'balloon',
    'category': 'Objects',
    'aliases': [
      'balloon'
    ],
    'tags': [
      'party',
      'birthday'
    ]
  },
  {
    'emoji': '🎏',
    'description': 'carp streamer',
    'category': 'Objects',
    'aliases': [
      'flags'
    ],
    'tags': []
  },
  {
    'emoji': '🎀',
    'description': 'ribbon',
    'category': 'Objects',
    'aliases': [
      'ribbon'
    ],
    'tags': []
  },
  {
    'emoji': '🎊',
    'description': 'confetti ball',
    'category': 'Objects',
    'aliases': [
      'confetti_ball'
    ],
    'tags': []
  },
  {
    'emoji': '🎉',
    'description': 'party popper',
    'category': 'Objects',
    'aliases': [
      'tada'
    ],
    'tags': [
      'hooray',
      'party'
    ]
  },
  {
    'emoji': '🎎',
    'description': 'Japanese dolls',
    'category': 'Objects',
    'aliases': [
      'dolls'
    ],
    'tags': []
  },
  {
    'emoji': '🏮',
    'description': 'red paper lantern',
    'category': 'Objects',
    'aliases': [
      'izakaya_lantern',
      'lantern'
    ],
    'tags': []
  },
  {
    'emoji': '🎐',
    'description': 'wind chime',
    'category': 'Objects',
    'aliases': [
      'wind_chime'
    ],
    'tags': []
  },
  {
    'emoji': '✉️',
    'description': 'envelope',
    'category': 'Objects',
    'aliases': [
      'email',
      'envelope'
    ],
    'tags': [
      'letter'
    ]
  },
  {
    'emoji': '📩',
    'description': 'envelope with arrow',
    'category': 'Objects',
    'aliases': [
      'envelope_with_arrow'
    ],
    'tags': []
  },
  {
    'emoji': '📨',
    'description': 'incoming envelope',
    'category': 'Objects',
    'aliases': [
      'incoming_envelope'
    ],
    'tags': []
  },
  {
    'emoji': '📧',
    'description': 'e-mail',
    'category': 'Objects',
    'aliases': [
      'e-mail'
    ],
    'tags': []
  },
  {
    'emoji': '💌',
    'description': 'love letter',
    'category': 'Objects',
    'aliases': [
      'love_letter'
    ],
    'tags': [
      'email',
      'envelope'
    ]
  },
  {
    'emoji': '📥',
    'description': 'inbox tray',
    'category': 'Objects',
    'aliases': [
      'inbox_tray'
    ],
    'tags': []
  },
  {
    'emoji': '📤',
    'description': 'outbox tray',
    'category': 'Objects',
    'aliases': [
      'outbox_tray'
    ],
    'tags': []
  },
  {
    'emoji': '📦',
    'description': 'package',
    'category': 'Objects',
    'aliases': [
      'package'
    ],
    'tags': [
      'shipping'
    ]
  },
  {
    'emoji': '🏷',
    'description': 'label',
    'category': 'Objects',
    'aliases': [
      'label'
    ],
    'tags': [
      'tag'
    ]
  },
  {
    'emoji': '📪',
    'description': 'closed mailbox with lowered flag',
    'category': 'Objects',
    'aliases': [
      'mailbox_closed'
    ],
    'tags': []
  },
  {
    'emoji': '📫',
    'description': 'closed mailbox with raised flag',
    'category': 'Objects',
    'aliases': [
      'mailbox'
    ],
    'tags': []
  },
  {
    'emoji': '📬',
    'description': 'open mailbox with raised flag',
    'category': 'Objects',
    'aliases': [
      'mailbox_with_mail'
    ],
    'tags': []
  },
  {
    'emoji': '📭',
    'description': 'open mailbox with lowered flag',
    'category': 'Objects',
    'aliases': [
      'mailbox_with_no_mail'
    ],
    'tags': []
  },
  {
    'emoji': '📮',
    'description': 'postbox',
    'category': 'Objects',
    'aliases': [
      'postbox'
    ],
    'tags': []
  },
  {
    'emoji': '📯',
    'description': 'postal horn',
    'category': 'Objects',
    'aliases': [
      'postal_horn'
    ],
    'tags': []
  },
  {
    'emoji': '📜',
    'description': 'scroll',
    'category': 'Objects',
    'aliases': [
      'scroll'
    ],
    'tags': [
      'document'
    ]
  },
  {
    'emoji': '📃',
    'description': 'page with curl',
    'category': 'Objects',
    'aliases': [
      'page_with_curl'
    ],
    'tags': []
  },
  {
    'emoji': '📄',
    'description': 'page facing up',
    'category': 'Objects',
    'aliases': [
      'page_facing_up'
    ],
    'tags': [
      'document'
    ]
  },
  {
    'emoji': '📑',
    'description': 'bookmark tabs',
    'category': 'Objects',
    'aliases': [
      'bookmark_tabs'
    ],
    'tags': []
  },
  {
    'emoji': '📊',
    'description': 'bar chart',
    'category': 'Objects',
    'aliases': [
      'bar_chart'
    ],
    'tags': [
      'stats',
      'metrics'
    ]
  },
  {
    'emoji': '📈',
    'description': 'chart increasing',
    'category': 'Objects',
    'aliases': [
      'chart_with_upwards_trend'
    ],
    'tags': [
      'graph',
      'metrics'
    ]
  },
  {
    'emoji': '📉',
    'description': 'chart decreasing',
    'category': 'Objects',
    'aliases': [
      'chart_with_downwards_trend'
    ],
    'tags': [
      'graph',
      'metrics'
    ]
  },
  {
    'emoji': '🗒',
    'description': 'spiral notepad',
    'category': 'Objects',
    'aliases': [
      'spiral_notepad'
    ],
    'tags': []
  },
  {
    'emoji': '🗓',
    'description': 'spiral calendar',
    'category': 'Objects',
    'aliases': [
      'spiral_calendar'
    ],
    'tags': []
  },
  {
    'emoji': '📆',
    'description': 'tear-off calendar',
    'category': 'Objects',
    'aliases': [
      'calendar'
    ],
    'tags': [
      'schedule'
    ]
  },
  {
    'emoji': '📅',
    'description': 'calendar',
    'category': 'Objects',
    'aliases': [
      'date'
    ],
    'tags': [
      'calendar',
      'schedule'
    ]
  },
  {
    'emoji': '📇',
    'description': 'card index',
    'category': 'Objects',
    'aliases': [
      'card_index'
    ],
    'tags': []
  },
  {
    'emoji': '🗃',
    'description': 'card file box',
    'category': 'Objects',
    'aliases': [
      'card_file_box'
    ],
    'tags': []
  },
  {
    'emoji': '🗳',
    'description': 'ballot box with ballot',
    'category': 'Objects',
    'aliases': [
      'ballot_box'
    ],
    'tags': []
  },
  {
    'emoji': '🗄',
    'description': 'file cabinet',
    'category': 'Objects',
    'aliases': [
      'file_cabinet'
    ],
    'tags': []
  },
  {
    'emoji': '📋',
    'description': 'clipboard',
    'category': 'Objects',
    'aliases': [
      'clipboard'
    ],
    'tags': []
  },
  {
    'emoji': '📁',
    'description': 'file folder',
    'category': 'Objects',
    'aliases': [
      'file_folder'
    ],
    'tags': [
      'directory'
    ]
  },
  {
    'emoji': '📂',
    'description': 'open file folder',
    'category': 'Objects',
    'aliases': [
      'open_file_folder'
    ],
    'tags': []
  },
  {
    'emoji': '🗂',
    'description': 'card index dividers',
    'category': 'Objects',
    'aliases': [
      'card_index_dividers'
    ],
    'tags': []
  },
  {
    'emoji': '🗞',
    'description': 'rolled-up newspaper',
    'category': 'Objects',
    'aliases': [
      'newspaper_roll'
    ],
    'tags': [
      'press'
    ]
  },
  {
    'emoji': '📰',
    'description': 'newspaper',
    'category': 'Objects',
    'aliases': [
      'newspaper'
    ],
    'tags': [
      'press'
    ]
  },
  {
    'emoji': '📓',
    'description': 'notebook',
    'category': 'Objects',
    'aliases': [
      'notebook'
    ],
    'tags': []
  },
  {
    'emoji': '📔',
    'description': 'notebook with decorative cover',
    'category': 'Objects',
    'aliases': [
      'notebook_with_decorative_cover'
    ],
    'tags': []
  },
  {
    'emoji': '📒',
    'description': 'ledger',
    'category': 'Objects',
    'aliases': [
      'ledger'
    ],
    'tags': []
  },
  {
    'emoji': '📕',
    'description': 'closed book',
    'category': 'Objects',
    'aliases': [
      'closed_book'
    ],
    'tags': []
  },
  {
    'emoji': '📗',
    'description': 'green book',
    'category': 'Objects',
    'aliases': [
      'green_book'
    ],
    'tags': []
  },
  {
    'emoji': '📘',
    'description': 'blue book',
    'category': 'Objects',
    'aliases': [
      'blue_book'
    ],
    'tags': []
  },
  {
    'emoji': '📙',
    'description': 'orange book',
    'category': 'Objects',
    'aliases': [
      'orange_book'
    ],
    'tags': []
  },
  {
    'emoji': '📚',
    'description': 'books',
    'category': 'Objects',
    'aliases': [
      'books'
    ],
    'tags': [
      'library'
    ]
  },
  {
    'emoji': '📖',
    'description': 'open book',
    'category': 'Objects',
    'aliases': [
      'book',
      'open_book'
    ],
    'tags': []
  },
  {
    'emoji': '🔖',
    'description': 'bookmark',
    'category': 'Objects',
    'aliases': [
      'bookmark'
    ],
    'tags': []
  },
  {
    'emoji': '🔗',
    'description': 'link',
    'category': 'Objects',
    'aliases': [
      'link'
    ],
    'tags': []
  },
  {
    'emoji': '📎',
    'description': 'paperclip',
    'category': 'Objects',
    'aliases': [
      'paperclip'
    ],
    'tags': []
  },
  {
    'emoji': '🖇',
    'description': 'linked paperclips',
    'category': 'Objects',
    'aliases': [
      'paperclips'
    ],
    'tags': []
  },
  {
    'emoji': '📐',
    'description': 'triangular ruler',
    'category': 'Objects',
    'aliases': [
      'triangular_ruler'
    ],
    'tags': []
  },
  {
    'emoji': '📏',
    'description': 'straight ruler',
    'category': 'Objects',
    'aliases': [
      'straight_ruler'
    ],
    'tags': []
  },
  {
    'emoji': '📌',
    'description': 'pushpin',
    'category': 'Objects',
    'aliases': [
      'pushpin'
    ],
    'tags': [
      'location'
    ]
  },
  {
    'emoji': '📍',
    'description': 'round pushpin',
    'category': 'Objects',
    'aliases': [
      'round_pushpin'
    ],
    'tags': [
      'location'
    ]
  },
  {
    'emoji': '✂️',
    'description': 'scissors',
    'category': 'Objects',
    'aliases': [
      'scissors'
    ],
    'tags': [
      'cut'
    ]
  },
  {
    'emoji': '🖊',
    'description': 'pen',
    'category': 'Objects',
    'aliases': [
      'pen'
    ],
    'tags': []
  },
  {
    'emoji': '🖋',
    'description': 'fountain pen',
    'category': 'Objects',
    'aliases': [
      'fountain_pen'
    ],
    'tags': []
  },
  {
    'emoji': '✒️',
    'description': 'black nib',
    'category': 'Objects',
    'aliases': [
      'black_nib'
    ],
    'tags': []
  },
  {
    'emoji': '🖌',
    'description': 'paintbrush',
    'category': 'Objects',
    'aliases': [
      'paintbrush'
    ],
    'tags': []
  },
  {
    'emoji': '🖍',
    'description': 'crayon',
    'category': 'Objects',
    'aliases': [
      'crayon'
    ],
    'tags': []
  },
  {
    'emoji': '📝',
    'description': 'memo',
    'category': 'Objects',
    'aliases': [
      'memo',
      'pencil'
    ],
    'tags': [
      'document',
      'note'
    ]
  },
  {
    'emoji': '✏️',
    'description': 'pencil',
    'category': 'Objects',
    'aliases': [
      'pencil2'
    ],
    'tags': []
  },
  {
    'emoji': '🔍',
    'description': 'left-pointing magnifying glass',
    'category': 'Objects',
    'aliases': [
      'mag'
    ],
    'tags': [
      'search',
      'zoom'
    ]
  },
  {
    'emoji': '🔎',
    'description': 'right-pointing magnifying glass',
    'category': 'Objects',
    'aliases': [
      'mag_right'
    ],
    'tags': []
  },
  {
    'emoji': '🔏',
    'description': 'locked with pen',
    'category': 'Objects',
    'aliases': [
      'lock_with_ink_pen'
    ],
    'tags': []
  },
  {
    'emoji': '🔐',
    'description': 'locked with key',
    'category': 'Objects',
    'aliases': [
      'closed_lock_with_key'
    ],
    'tags': [
      'security'
    ]
  },
  {
    'emoji': '🔒',
    'description': 'locked',
    'category': 'Objects',
    'aliases': [
      'lock'
    ],
    'tags': [
      'security',
      'private'
    ]
  },
  {
    'emoji': '🔓',
    'description': 'unlocked',
    'category': 'Objects',
    'aliases': [
      'unlock'
    ],
    'tags': [
      'security'
    ]
  },
  {
    'emoji': '❤️',
    'description': 'red heart',
    'category': 'Symbols',
    'aliases': [
      'heart'
    ],
    'tags': [
      'love'
    ]
  },
  {
    'emoji': '💛',
    'description': 'yellow heart',
    'category': 'Symbols',
    'aliases': [
      'yellow_heart'
    ],
    'tags': []
  },
  {
    'emoji': '💚',
    'description': 'green heart',
    'category': 'Symbols',
    'aliases': [
      'green_heart'
    ],
    'tags': []
  },
  {
    'emoji': '💙',
    'description': 'blue heart',
    'category': 'Symbols',
    'aliases': [
      'blue_heart'
    ],
    'tags': []
  },
  {
    'emoji': '💜',
    'description': 'purple heart',
    'category': 'Symbols',
    'aliases': [
      'purple_heart'
    ],
    'tags': []
  },
  {
    'emoji': '🖤',
    'description': 'black heart',
    'category': 'Symbols',
    'aliases': [
      'black_heart'
    ],
    'tags': []
  },
  {
    'emoji': '💔',
    'description': 'broken heart',
    'category': 'Symbols',
    'aliases': [
      'broken_heart'
    ],
    'tags': []
  },
  {
    'emoji': '❣️',
    'description': 'heavy heart exclamation',
    'category': 'Symbols',
    'aliases': [
      'heavy_heart_exclamation'
    ],
    'tags': []
  },
  {
    'emoji': '💕',
    'description': 'two hearts',
    'category': 'Symbols',
    'aliases': [
      'two_hearts'
    ],
    'tags': []
  },
  {
    'emoji': '💞',
    'description': 'revolving hearts',
    'category': 'Symbols',
    'aliases': [
      'revolving_hearts'
    ],
    'tags': []
  },
  {
    'emoji': '💓',
    'description': 'beating heart',
    'category': 'Symbols',
    'aliases': [
      'heartbeat'
    ],
    'tags': []
  },
  {
    'emoji': '💗',
    'description': 'growing heart',
    'category': 'Symbols',
    'aliases': [
      'heartpulse'
    ],
    'tags': []
  },
  {
    'emoji': '💖',
    'description': 'sparkling heart',
    'category': 'Symbols',
    'aliases': [
      'sparkling_heart'
    ],
    'tags': []
  },
  {
    'emoji': '💘',
    'description': 'heart with arrow',
    'category': 'Symbols',
    'aliases': [
      'cupid'
    ],
    'tags': [
      'love',
      'heart'
    ]
  },
  {
    'emoji': '💝',
    'description': 'heart with ribbon',
    'category': 'Symbols',
    'aliases': [
      'gift_heart'
    ],
    'tags': [
      'chocolates'
    ]
  },
  {
    'emoji': '💟',
    'description': 'heart decoration',
    'category': 'Symbols',
    'aliases': [
      'heart_decoration'
    ],
    'tags': []
  },
  {
    'emoji': '☮️',
    'description': 'peace symbol',
    'category': 'Symbols',
    'aliases': [
      'peace_symbol'
    ],
    'tags': []
  },
  {
    'emoji': '✝️',
    'description': 'latin cross',
    'category': 'Symbols',
    'aliases': [
      'latin_cross'
    ],
    'tags': []
  },
  {
    'emoji': '☪️',
    'description': 'star and crescent',
    'category': 'Symbols',
    'aliases': [
      'star_and_crescent'
    ],
    'tags': []
  },
  {
    'emoji': '🕉',
    'description': 'om',
    'category': 'Symbols',
    'aliases': [
      'om'
    ],
    'tags': []
  },
  {
    'emoji': '☸️',
    'description': 'wheel of dharma',
    'category': 'Symbols',
    'aliases': [
      'wheel_of_dharma'
    ],
    'tags': []
  },
  {
    'emoji': '✡️',
    'description': 'star of David',
    'category': 'Symbols',
    'aliases': [
      'star_of_david'
    ],
    'tags': []
  },
  {
    'emoji': '🔯',
    'description': 'dotted six-pointed star',
    'category': 'Symbols',
    'aliases': [
      'six_pointed_star'
    ],
    'tags': []
  },
  {
    'emoji': '🕎',
    'description': 'menorah',
    'category': 'Symbols',
    'aliases': [
      'menorah'
    ],
    'tags': []
  },
  {
    'emoji': '☯️',
    'description': 'yin yang',
    'category': 'Symbols',
    'aliases': [
      'yin_yang'
    ],
    'tags': []
  },
  {
    'emoji': '☦️',
    'description': 'orthodox cross',
    'category': 'Symbols',
    'aliases': [
      'orthodox_cross'
    ],
    'tags': []
  },
  {
    'emoji': '🛐',
    'description': 'place of worship',
    'category': 'Symbols',
    'aliases': [
      'place_of_worship'
    ],
    'tags': []
  },
  {
    'emoji': '⛎',
    'description': 'Ophiuchus',
    'category': 'Symbols',
    'aliases': [
      'ophiuchus'
    ],
    'tags': []
  },
  {
    'emoji': '♈️',
    'description': 'Aries',
    'category': 'Symbols',
    'aliases': [
      'aries'
    ],
    'tags': []
  },
  {
    'emoji': '♉️',
    'description': 'Taurus',
    'category': 'Symbols',
    'aliases': [
      'taurus'
    ],
    'tags': []
  },
  {
    'emoji': '♊️',
    'description': 'Gemini',
    'category': 'Symbols',
    'aliases': [
      'gemini'
    ],
    'tags': []
  },
  {
    'emoji': '♋️',
    'description': 'Cancer',
    'category': 'Symbols',
    'aliases': [
      'cancer'
    ],
    'tags': []
  },
  {
    'emoji': '♌️',
    'description': 'Leo',
    'category': 'Symbols',
    'aliases': [
      'leo'
    ],
    'tags': []
  },
  {
    'emoji': '♍️',
    'description': 'Virgo',
    'category': 'Symbols',
    'aliases': [
      'virgo'
    ],
    'tags': []
  },
  {
    'emoji': '♎️',
    'description': 'Libra',
    'category': 'Symbols',
    'aliases': [
      'libra'
    ],
    'tags': []
  },
  {
    'emoji': '♏️',
    'description': 'Scorpius',
    'category': 'Symbols',
    'aliases': [
      'scorpius'
    ],
    'tags': []
  },
  {
    'emoji': '♐️',
    'description': 'Sagittarius',
    'category': 'Symbols',
    'aliases': [
      'sagittarius'
    ],
    'tags': []
  },
  {
    'emoji': '♑️',
    'description': 'Capricorn',
    'category': 'Symbols',
    'aliases': [
      'capricorn'
    ],
    'tags': []
  },
  {
    'emoji': '♒️',
    'description': 'Aquarius',
    'category': 'Symbols',
    'aliases': [
      'aquarius'
    ],
    'tags': []
  },
  {
    'emoji': '♓️',
    'description': 'Pisces',
    'category': 'Symbols',
    'aliases': [
      'pisces'
    ],
    'tags': []
  },
  {
    'emoji': '🆔',
    'description': 'ID button',
    'category': 'Symbols',
    'aliases': [
      'id'
    ],
    'tags': []
  },
  {
    'emoji': '⚛️',
    'description': 'atom symbol',
    'category': 'Symbols',
    'aliases': [
      'atom_symbol'
    ],
    'tags': []
  },
  {
    'emoji': '🉑',
    'description': 'Japanese “acceptable” button',
    'category': 'Symbols',
    'aliases': [
      'accept'
    ],
    'tags': []
  },
  {
    'emoji': '☢️',
    'description': 'radioactive',
    'category': 'Symbols',
    'aliases': [
      'radioactive'
    ],
    'tags': []
  },
  {
    'emoji': '☣️',
    'description': 'biohazard',
    'category': 'Symbols',
    'aliases': [
      'biohazard'
    ],
    'tags': []
  },
  {
    'emoji': '📴',
    'description': 'mobile phone off',
    'category': 'Symbols',
    'aliases': [
      'mobile_phone_off'
    ],
    'tags': [
      'mute',
      'off'
    ]
  },
  {
    'emoji': '📳',
    'description': 'vibration mode',
    'category': 'Symbols',
    'aliases': [
      'vibration_mode'
    ],
    'tags': []
  },
  {
    'emoji': '🈶',
    'description': 'Japanese “not free of charge” button',
    'category': 'Symbols',
    'aliases': [
      'u6709'
    ],
    'tags': []
  },
  {
    'emoji': '🈚️',
    'description': 'Japanese “free of charge” button',
    'category': 'Symbols',
    'aliases': [
      'u7121'
    ],
    'tags': []
  },
  {
    'emoji': '🈸',
    'description': 'Japanese “application” button',
    'category': 'Symbols',
    'aliases': [
      'u7533'
    ],
    'tags': []
  },
  {
    'emoji': '🈺',
    'description': 'Japanese “open for business” button',
    'category': 'Symbols',
    'aliases': [
      'u55b6'
    ],
    'tags': []
  },
  {
    'emoji': '🈷️',
    'description': 'Japanese “monthly amount” button',
    'category': 'Symbols',
    'aliases': [
      'u6708'
    ],
    'tags': []
  },
  {
    'emoji': '✴️',
    'description': 'eight-pointed star',
    'category': 'Symbols',
    'aliases': [
      'eight_pointed_black_star'
    ],
    'tags': []
  },
  {
    'emoji': '🆚',
    'description': 'VS button',
    'category': 'Symbols',
    'aliases': [
      'vs'
    ],
    'tags': []
  },
  {
    'emoji': '💮',
    'description': 'white flower',
    'category': 'Symbols',
    'aliases': [
      'white_flower'
    ],
    'tags': []
  },
  {
    'emoji': '🉐',
    'description': 'Japanese “bargain” button',
    'category': 'Symbols',
    'aliases': [
      'ideograph_advantage'
    ],
    'tags': []
  },
  {
    'emoji': '㊙️',
    'description': 'Japanese “secret” button',
    'category': 'Symbols',
    'aliases': [
      'secret'
    ],
    'tags': []
  },
  {
    'emoji': '㊗️',
    'description': 'Japanese “congratulations” button',
    'category': 'Symbols',
    'aliases': [
      'congratulations'
    ],
    'tags': []
  },
  {
    'emoji': '🈴',
    'description': 'Japanese “passing grade” button',
    'category': 'Symbols',
    'aliases': [
      'u5408'
    ],
    'tags': []
  },
  {
    'emoji': '🈵',
    'description': 'Japanese “no vacancy” button',
    'category': 'Symbols',
    'aliases': [
      'u6e80'
    ],
    'tags': []
  },
  {
    'emoji': '🈹',
    'description': 'Japanese “discount” button',
    'category': 'Symbols',
    'aliases': [
      'u5272'
    ],
    'tags': []
  },
  {
    'emoji': '🈲',
    'description': 'Japanese “prohibited” button',
    'category': 'Symbols',
    'aliases': [
      'u7981'
    ],
    'tags': []
  },
  {
    'emoji': '🅰️',
    'description': 'A button (blood type)',
    'category': 'Symbols',
    'aliases': [
      'a'
    ],
    'tags': []
  },
  {
    'emoji': '🅱️',
    'description': 'B button (blood type)',
    'category': 'Symbols',
    'aliases': [
      'b'
    ],
    'tags': []
  },
  {
    'emoji': '🆎',
    'description': 'AB button (blood type)',
    'category': 'Symbols',
    'aliases': [
      'ab'
    ],
    'tags': []
  },
  {
    'emoji': '🆑',
    'description': 'CL button',
    'category': 'Symbols',
    'aliases': [
      'cl'
    ],
    'tags': []
  },
  {
    'emoji': '🅾️',
    'description': 'O button (blood type)',
    'category': 'Symbols',
    'aliases': [
      'o2'
    ],
    'tags': []
  },
  {
    'emoji': '🆘',
    'description': 'SOS button',
    'category': 'Symbols',
    'aliases': [
      'sos'
    ],
    'tags': [
      'help',
      'emergency'
    ]
  },
  {
    'emoji': '❌',
    'description': 'cross mark',
    'category': 'Symbols',
    'aliases': [
      'x'
    ],
    'tags': []
  },
  {
    'emoji': '⭕️',
    'description': 'heavy large circle',
    'category': 'Symbols',
    'aliases': [
      'o'
    ],
    'tags': []
  },
  {
    'emoji': '🛑',
    'description': 'stop sign',
    'category': 'Symbols',
    'aliases': [
      'stop_sign'
    ],
    'tags': []
  },
  {
    'emoji': '⛔️',
    'description': 'no entry',
    'category': 'Symbols',
    'aliases': [
      'no_entry'
    ],
    'tags': [
      'limit'
    ]
  },
  {
    'emoji': '📛',
    'description': 'name badge',
    'category': 'Symbols',
    'aliases': [
      'name_badge'
    ],
    'tags': []
  },
  {
    'emoji': '🚫',
    'description': 'prohibited',
    'category': 'Symbols',
    'aliases': [
      'no_entry_sign'
    ],
    'tags': [
      'block',
      'forbidden'
    ]
  },
  {
    'emoji': '💯',
    'description': 'hundred points',
    'category': 'Symbols',
    'aliases': [
      '100'
    ],
    'tags': [
      'score',
      'perfect'
    ]
  },
  {
    'emoji': '💢',
    'description': 'anger symbol',
    'category': 'Symbols',
    'aliases': [
      'anger'
    ],
    'tags': [
      'angry'
    ]
  },
  {
    'emoji': '♨️',
    'description': 'hot springs',
    'category': 'Symbols',
    'aliases': [
      'hotsprings'
    ],
    'tags': []
  },
  {
    'emoji': '🚷',
    'description': 'no pedestrians',
    'category': 'Symbols',
    'aliases': [
      'no_pedestrians'
    ],
    'tags': []
  },
  {
    'emoji': '🚯',
    'description': 'no littering',
    'category': 'Symbols',
    'aliases': [
      'do_not_litter'
    ],
    'tags': []
  },
  {
    'emoji': '🚳',
    'description': 'no bicycles',
    'category': 'Symbols',
    'aliases': [
      'no_bicycles'
    ],
    'tags': []
  },
  {
    'emoji': '🚱',
    'description': 'non-potable water',
    'category': 'Symbols',
    'aliases': [
      'non-potable_water'
    ],
    'tags': []
  },
  {
    'emoji': '🔞',
    'description': 'no one under eighteen',
    'category': 'Symbols',
    'aliases': [
      'underage'
    ],
    'tags': []
  },
  {
    'emoji': '📵',
    'description': 'no mobile phones',
    'category': 'Symbols',
    'aliases': [
      'no_mobile_phones'
    ],
    'tags': []
  },
  {
    'emoji': '🚭',
    'description': 'no smoking',
    'category': 'Symbols',
    'aliases': [
      'no_smoking'
    ],
    'tags': []
  },
  {
    'emoji': '❗️',
    'description': 'exclamation mark',
    'category': 'Symbols',
    'aliases': [
      'exclamation',
      'heavy_exclamation_mark'
    ],
    'tags': [
      'bang'
    ]
  },
  {
    'emoji': '❕',
    'description': 'white exclamation mark',
    'category': 'Symbols',
    'aliases': [
      'grey_exclamation'
    ],
    'tags': []
  },
  {
    'emoji': '❓',
    'description': 'question mark',
    'category': 'Symbols',
    'aliases': [
      'question'
    ],
    'tags': [
      'confused'
    ]
  },
  {
    'emoji': '❔',
    'description': 'white question mark',
    'category': 'Symbols',
    'aliases': [
      'grey_question'
    ],
    'tags': []
  },
  {
    'emoji': '‼️',
    'description': 'double exclamation mark',
    'category': 'Symbols',
    'aliases': [
      'bangbang'
    ],
    'tags': []
  },
  {
    'emoji': '⁉️',
    'description': 'exclamation question mark',
    'category': 'Symbols',
    'aliases': [
      'interrobang'
    ],
    'tags': []
  },
  {
    'emoji': '🔅',
    'description': 'dim button',
    'category': 'Symbols',
    'aliases': [
      'low_brightness'
    ],
    'tags': []
  },
  {
    'emoji': '🔆',
    'description': 'bright button',
    'category': 'Symbols',
    'aliases': [
      'high_brightness'
    ],
    'tags': []
  },
  {
    'emoji': '〽️',
    'description': 'part alternation mark',
    'category': 'Symbols',
    'aliases': [
      'part_alternation_mark'
    ],
    'tags': []
  },
  {
    'emoji': '⚠️',
    'description': 'warning',
    'category': 'Symbols',
    'aliases': [
      'warning'
    ],
    'tags': [
      'wip'
    ]
  },
  {
    'emoji': '🚸',
    'description': 'children crossing',
    'category': 'Symbols',
    'aliases': [
      'children_crossing'
    ],
    'tags': []
  },
  {
    'emoji': '🔱',
    'description': 'trident emblem',
    'category': 'Symbols',
    'aliases': [
      'trident'
    ],
    'tags': []
  },
  {
    'emoji': '⚜️',
    'description': 'fleur-de-lis',
    'category': 'Symbols',
    'aliases': [
      'fleur_de_lis'
    ],
    'tags': []
  },
  {
    'emoji': '🔰',
    'description': 'Japanese symbol for beginner',
    'category': 'Symbols',
    'aliases': [
      'beginner'
    ],
    'tags': []
  },
  {
    'emoji': '♻️',
    'description': 'recycling symbol',
    'category': 'Symbols',
    'aliases': [
      'recycle'
    ],
    'tags': [
      'environment',
      'green'
    ]
  },
  {
    'emoji': '✅',
    'description': 'white heavy check mark',
    'category': 'Symbols',
    'aliases': [
      'white_check_mark'
    ],
    'tags': []
  },
  {
    'emoji': '🈯️',
    'description': 'Japanese “reserved” button',
    'category': 'Symbols',
    'aliases': [
      'u6307'
    ],
    'tags': []
  },
  {
    'emoji': '💹',
    'description': 'chart increasing with yen',
    'category': 'Symbols',
    'aliases': [
      'chart'
    ],
    'tags': []
  },
  {
    'emoji': '❇️',
    'description': 'sparkle',
    'category': 'Symbols',
    'aliases': [
      'sparkle'
    ],
    'tags': []
  },
  {
    'emoji': '✳️',
    'description': 'eight-spoked asterisk',
    'category': 'Symbols',
    'aliases': [
      'eight_spoked_asterisk'
    ],
    'tags': []
  },
  {
    'emoji': '❎',
    'description': 'cross mark button',
    'category': 'Symbols',
    'aliases': [
      'negative_squared_cross_mark'
    ],
    'tags': []
  },
  {
    'emoji': '🌐',
    'description': 'globe with meridians',
    'category': 'Symbols',
    'aliases': [
      'globe_with_meridians'
    ],
    'tags': [
      'world',
      'global',
      'international'
    ]
  },
  {
    'emoji': '💠',
    'description': 'diamond with a dot',
    'category': 'Symbols',
    'aliases': [
      'diamond_shape_with_a_dot_inside'
    ],
    'tags': []
  },
  {
    'emoji': 'Ⓜ️',
    'description': 'circled M',
    'category': 'Symbols',
    'aliases': [
      'm'
    ],
    'tags': []
  },
  {
    'emoji': '🌀',
    'description': 'cyclone',
    'category': 'Symbols',
    'aliases': [
      'cyclone'
    ],
    'tags': [
      'swirl'
    ]
  },
  {
    'emoji': '💤',
    'description': 'zzz',
    'category': 'Symbols',
    'aliases': [
      'zzz'
    ],
    'tags': [
      'sleeping'
    ]
  },
  {
    'emoji': '🏧',
    'description': 'ATM sign',
    'category': 'Symbols',
    'aliases': [
      'atm'
    ],
    'tags': []
  },
  {
    'emoji': '🚾',
    'description': 'water closet',
    'category': 'Symbols',
    'aliases': [
      'wc'
    ],
    'tags': [
      'toilet',
      'restroom'
    ]
  },
  {
    'emoji': '♿️',
    'description': 'wheelchair symbol',
    'category': 'Symbols',
    'aliases': [
      'wheelchair'
    ],
    'tags': [
      'accessibility'
    ]
  },
  {
    'emoji': '🅿️',
    'description': 'P button',
    'category': 'Symbols',
    'aliases': [
      'parking'
    ],
    'tags': []
  },
  {
    'emoji': '🈳',
    'description': 'Japanese “vacancy” button',
    'category': 'Symbols',
    'aliases': [
      'u7a7a'
    ],
    'tags': []
  },
  {
    'emoji': '🈂️',
    'description': 'Japanese “service charge” button',
    'category': 'Symbols',
    'aliases': [
      'sa'
    ],
    'tags': []
  },
  {
    'emoji': '🛂',
    'description': 'passport control',
    'category': 'Symbols',
    'aliases': [
      'passport_control'
    ],
    'tags': []
  },
  {
    'emoji': '🛃',
    'description': 'customs',
    'category': 'Symbols',
    'aliases': [
      'customs'
    ],
    'tags': []
  },
  {
    'emoji': '🛄',
    'description': 'baggage claim',
    'category': 'Symbols',
    'aliases': [
      'baggage_claim'
    ],
    'tags': [
      'airport'
    ]
  },
  {
    'emoji': '🛅',
    'description': 'left luggage',
    'category': 'Symbols',
    'aliases': [
      'left_luggage'
    ],
    'tags': []
  },
  {
    'emoji': '🚹',
    'description': 'men’s room',
    'category': 'Symbols',
    'aliases': [
      'mens'
    ],
    'tags': []
  },
  {
    'emoji': '🚺',
    'description': 'women’s room',
    'category': 'Symbols',
    'aliases': [
      'womens'
    ],
    'tags': []
  },
  {
    'emoji': '🚼',
    'description': 'baby symbol',
    'category': 'Symbols',
    'aliases': [
      'baby_symbol'
    ],
    'tags': []
  },
  {
    'emoji': '🚻',
    'description': 'restroom',
    'category': 'Symbols',
    'aliases': [
      'restroom'
    ],
    'tags': [
      'toilet'
    ]
  },
  {
    'emoji': '🚮',
    'description': 'litter in bin sign',
    'category': 'Symbols',
    'aliases': [
      'put_litter_in_its_place'
    ],
    'tags': []
  },
  {
    'emoji': '🎦',
    'description': 'cinema',
    'category': 'Symbols',
    'aliases': [
      'cinema'
    ],
    'tags': [
      'film',
      'movie'
    ]
  },
  {
    'emoji': '📶',
    'description': 'antenna bars',
    'category': 'Symbols',
    'aliases': [
      'signal_strength'
    ],
    'tags': [
      'wifi'
    ]
  },
  {
    'emoji': '🈁',
    'description': 'Japanese “here” button',
    'category': 'Symbols',
    'aliases': [
      'koko'
    ],
    'tags': []
  },
  {
    'emoji': '🔣',
    'description': 'input symbols',
    'category': 'Symbols',
    'aliases': [
      'symbols'
    ],
    'tags': []
  },
  {
    'emoji': 'ℹ️',
    'description': 'information',
    'category': 'Symbols',
    'aliases': [
      'information_source'
    ],
    'tags': []
  },
  {
    'emoji': '🔤',
    'description': 'input latin letters',
    'category': 'Symbols',
    'aliases': [
      'abc'
    ],
    'tags': [
      'alphabet'
    ]
  },
  {
    'emoji': '🔡',
    'description': 'input latin lowercase',
    'category': 'Symbols',
    'aliases': [
      'abcd'
    ],
    'tags': []
  },
  {
    'emoji': '🔠',
    'description': 'input latin uppercase',
    'category': 'Symbols',
    'aliases': [
      'capital_abcd'
    ],
    'tags': [
      'letters'
    ]
  },
  {
    'emoji': '🆖',
    'description': 'NG button',
    'category': 'Symbols',
    'aliases': [
      'ng'
    ],
    'tags': []
  },
  {
    'emoji': '🆗',
    'description': 'OK button',
    'category': 'Symbols',
    'aliases': [
      'ok'
    ],
    'tags': [
      'yes'
    ]
  },
  {
    'emoji': '🆙',
    'description': 'UP! button',
    'category': 'Symbols',
    'aliases': [
      'up'
    ],
    'tags': []
  },
  {
    'emoji': '🆒',
    'description': 'COOL button',
    'category': 'Symbols',
    'aliases': [
      'cool'
    ],
    'tags': []
  },
  {
    'emoji': '🆕',
    'description': 'NEW button',
    'category': 'Symbols',
    'aliases': [
      'new'
    ],
    'tags': [
      'fresh'
    ]
  },
  {
    'emoji': '🆓',
    'description': 'FREE button',
    'category': 'Symbols',
    'aliases': [
      'free'
    ],
    'tags': []
  },
  {
    'emoji': '0️⃣',
    'description': 'keycap: 0',
    'category': 'Symbols',
    'aliases': [
      'zero'
    ],
    'tags': []
  },
  {
    'emoji': '1️⃣',
    'description': 'keycap: 1',
    'category': 'Symbols',
    'aliases': [
      'one'
    ],
    'tags': []
  },
  {
    'emoji': '2️⃣',
    'description': 'keycap: 2',
    'category': 'Symbols',
    'aliases': [
      'two'
    ],
    'tags': []
  },
  {
    'emoji': '3️⃣',
    'description': 'keycap: 3',
    'category': 'Symbols',
    'aliases': [
      'three'
    ],
    'tags': []
  },
  {
    'emoji': '4️⃣',
    'description': 'keycap: 4',
    'category': 'Symbols',
    'aliases': [
      'four'
    ],
    'tags': []
  },
  {
    'emoji': '5️⃣',
    'description': 'keycap: 5',
    'category': 'Symbols',
    'aliases': [
      'five'
    ],
    'tags': []
  },
  {
    'emoji': '6️⃣',
    'description': 'keycap: 6',
    'category': 'Symbols',
    'aliases': [
      'six'
    ],
    'tags': []
  },
  {
    'emoji': '7️⃣',
    'description': 'keycap: 7',
    'category': 'Symbols',
    'aliases': [
      'seven'
    ],
    'tags': []
  },
  {
    'emoji': '8️⃣',
    'description': 'keycap: 8',
    'category': 'Symbols',
    'aliases': [
      'eight'
    ],
    'tags': []
  },
  {
    'emoji': '9️⃣',
    'description': 'keycap: 9',
    'category': 'Symbols',
    'aliases': [
      'nine'
    ],
    'tags': []
  },
  {
    'emoji': '🔟',
    'description': 'keycap 10',
    'category': 'Symbols',
    'aliases': [
      'keycap_ten'
    ],
    'tags': []
  },
  {
    'emoji': '🔢',
    'description': 'input numbers',
    'category': 'Symbols',
    'aliases': [
      '1234'
    ],
    'tags': [
      'numbers'
    ]
  },
  {
    'emoji': '#️⃣',
    'description': 'keycap: #',
    'category': 'Symbols',
    'aliases': [
      'hash'
    ],
    'tags': [
      'number'
    ]
  },
  {
    'emoji': '*️⃣',
    'description': 'keycap: *',
    'category': 'Symbols',
    'aliases': [
      'asterisk'
    ],
    'tags': []
  },
  {
    'emoji': '▶️',
    'description': 'play button',
    'category': 'Symbols',
    'aliases': [
      'arrow_forward'
    ],
    'tags': []
  },
  {
    'emoji': '⏸',
    'description': 'pause button',
    'category': 'Symbols',
    'aliases': [
      'pause_button'
    ],
    'tags': []
  },
  {
    'emoji': '⏯',
    'description': 'play or pause button',
    'category': 'Symbols',
    'aliases': [
      'play_or_pause_button'
    ],
    'tags': []
  },
  {
    'emoji': '⏹',
    'description': 'stop button',
    'category': 'Symbols',
    'aliases': [
      'stop_button'
    ],
    'tags': []
  },
  {
    'emoji': '⏺',
    'description': 'record button',
    'category': 'Symbols',
    'aliases': [
      'record_button'
    ],
    'tags': []
  },
  {
    'emoji': '⏭',
    'description': 'next track button',
    'category': 'Symbols',
    'aliases': [
      'next_track_button'
    ],
    'tags': []
  },
  {
    'emoji': '⏮',
    'description': 'last track button',
    'category': 'Symbols',
    'aliases': [
      'previous_track_button'
    ],
    'tags': []
  },
  {
    'emoji': '⏩',
    'description': 'fast-forward button',
    'category': 'Symbols',
    'aliases': [
      'fast_forward'
    ],
    'tags': []
  },
  {
    'emoji': '⏪',
    'description': 'fast reverse button',
    'category': 'Symbols',
    'aliases': [
      'rewind'
    ],
    'tags': []
  },
  {
    'emoji': '⏫',
    'description': 'fast up button',
    'category': 'Symbols',
    'aliases': [
      'arrow_double_up'
    ],
    'tags': []
  },
  {
    'emoji': '⏬',
    'description': 'fast down button',
    'category': 'Symbols',
    'aliases': [
      'arrow_double_down'
    ],
    'tags': []
  },
  {
    'emoji': '◀️',
    'description': 'reverse button',
    'category': 'Symbols',
    'aliases': [
      'arrow_backward'
    ],
    'tags': []
  },
  {
    'emoji': '🔼',
    'description': 'up button',
    'category': 'Symbols',
    'aliases': [
      'arrow_up_small'
    ],
    'tags': []
  },
  {
    'emoji': '🔽',
    'description': 'down button',
    'category': 'Symbols',
    'aliases': [
      'arrow_down_small'
    ],
    'tags': []
  },
  {
    'emoji': '➡️',
    'description': 'right arrow',
    'category': 'Symbols',
    'aliases': [
      'arrow_right'
    ],
    'tags': []
  },
  {
    'emoji': '⬅️',
    'description': 'left arrow',
    'category': 'Symbols',
    'aliases': [
      'arrow_left'
    ],
    'tags': []
  },
  {
    'emoji': '⬆️',
    'description': 'up arrow',
    'category': 'Symbols',
    'aliases': [
      'arrow_up'
    ],
    'tags': []
  },
  {
    'emoji': '⬇️',
    'description': 'down arrow',
    'category': 'Symbols',
    'aliases': [
      'arrow_down'
    ],
    'tags': []
  },
  {
    'emoji': '↗️',
    'description': 'up-right arrow',
    'category': 'Symbols',
    'aliases': [
      'arrow_upper_right'
    ],
    'tags': []
  },
  {
    'emoji': '↘️',
    'description': 'down-right arrow',
    'category': 'Symbols',
    'aliases': [
      'arrow_lower_right'
    ],
    'tags': []
  },
  {
    'emoji': '↙️',
    'description': 'down-left arrow',
    'category': 'Symbols',
    'aliases': [
      'arrow_lower_left'
    ],
    'tags': []
  },
  {
    'emoji': '↖️',
    'description': 'up-left arrow',
    'category': 'Symbols',
    'aliases': [
      'arrow_upper_left'
    ],
    'tags': []
  },
  {
    'emoji': '↕️',
    'description': 'up-down arrow',
    'category': 'Symbols',
    'aliases': [
      'arrow_up_down'
    ],
    'tags': []
  },
  {
    'emoji': '↔️',
    'description': 'left-right arrow',
    'category': 'Symbols',
    'aliases': [
      'left_right_arrow'
    ],
    'tags': []
  },
  {
    'emoji': '↪️',
    'description': 'left arrow curving right',
    'category': 'Symbols',
    'aliases': [
      'arrow_right_hook'
    ],
    'tags': []
  },
  {
    'emoji': '↩️',
    'description': 'right arrow curving left',
    'category': 'Symbols',
    'aliases': [
      'leftwards_arrow_with_hook'
    ],
    'tags': [
      'return'
    ]
  },
  {
    'emoji': '⤴️',
    'description': 'right arrow curving up',
    'category': 'Symbols',
    'aliases': [
      'arrow_heading_up'
    ],
    'tags': []
  },
  {
    'emoji': '⤵️',
    'description': 'right arrow curving down',
    'category': 'Symbols',
    'aliases': [
      'arrow_heading_down'
    ],
    'tags': []
  },
  {
    'emoji': '🔀',
    'description': 'shuffle tracks button',
    'category': 'Symbols',
    'aliases': [
      'twisted_rightwards_arrows'
    ],
    'tags': [
      'shuffle'
    ]
  },
  {
    'emoji': '🔁',
    'description': 'repeat button',
    'category': 'Symbols',
    'aliases': [
      'repeat'
    ],
    'tags': [
      'loop'
    ]
  },
  {
    'emoji': '🔂',
    'description': 'repeat single button',
    'category': 'Symbols',
    'aliases': [
      'repeat_one'
    ],
    'tags': []
  },
  {
    'emoji': '🔄',
    'description': 'anticlockwise arrows button',
    'category': 'Symbols',
    'aliases': [
      'arrows_counterclockwise'
    ],
    'tags': [
      'sync'
    ]
  },
  {
    'emoji': '🔃',
    'description': 'clockwise vertical arrows',
    'category': 'Symbols',
    'aliases': [
      'arrows_clockwise'
    ],
    'tags': []
  },
  {
    'emoji': '🎵',
    'description': 'musical note',
    'category': 'Symbols',
    'aliases': [
      'musical_note'
    ],
    'tags': []
  },
  {
    'emoji': '🎶',
    'description': 'musical notes',
    'category': 'Symbols',
    'aliases': [
      'notes'
    ],
    'tags': [
      'music'
    ]
  },
  {
    'emoji': '➕',
    'description': 'heavy plus sign',
    'category': 'Symbols',
    'aliases': [
      'heavy_plus_sign'
    ],
    'tags': []
  },
  {
    'emoji': '➖',
    'description': 'heavy minus sign',
    'category': 'Symbols',
    'aliases': [
      'heavy_minus_sign'
    ],
    'tags': []
  },
  {
    'emoji': '➗',
    'description': 'heavy division sign',
    'category': 'Symbols',
    'aliases': [
      'heavy_division_sign'
    ],
    'tags': []
  },
  {
    'emoji': '✖️',
    'description': 'heavy multiplication x',
    'category': 'Symbols',
    'aliases': [
      'heavy_multiplication_x'
    ],
    'tags': []
  },
  {
    'emoji': '💲',
    'description': 'heavy dollar sign',
    'category': 'Symbols',
    'aliases': [
      'heavy_dollar_sign'
    ],
    'tags': []
  },
  {
    'emoji': '💱',
    'description': 'currency exchange',
    'category': 'Symbols',
    'aliases': [
      'currency_exchange'
    ],
    'tags': []
  },
  {
    'emoji': '™️',
    'description': 'trade mark',
    'category': 'Symbols',
    'aliases': [
      'tm'
    ],
    'tags': [
      'trademark'
    ]
  },
  {
    'emoji': '©️',
    'description': 'copyright',
    'category': 'Symbols',
    'aliases': [
      'copyright'
    ],
    'tags': []
  },
  {
    'emoji': '®️',
    'description': 'registered',
    'category': 'Symbols',
    'aliases': [
      'registered'
    ],
    'tags': []
  },
  {
    'emoji': '〰️',
    'description': 'wavy dash',
    'category': 'Symbols',
    'aliases': [
      'wavy_dash'
    ],
    'tags': []
  },
  {
    'emoji': '➰',
    'description': 'curly loop',
    'category': 'Symbols',
    'aliases': [
      'curly_loop'
    ],
    'tags': []
  },
  {
    'emoji': '➿',
    'description': 'double curly loop',
    'category': 'Symbols',
    'aliases': [
      'loop'
    ],
    'tags': []
  },
  {
    'emoji': '🔚',
    'description': 'END arrow',
    'category': 'Symbols',
    'aliases': [
      'end'
    ],
    'tags': []
  },
  {
    'emoji': '🔙',
    'description': 'BACK arrow',
    'category': 'Symbols',
    'aliases': [
      'back'
    ],
    'tags': []
  },
  {
    'emoji': '🔛',
    'description': 'ON! arrow',
    'category': 'Symbols',
    'aliases': [
      'on'
    ],
    'tags': []
  },
  {
    'emoji': '🔝',
    'description': 'TOP arrow',
    'category': 'Symbols',
    'aliases': [
      'top'
    ],
    'tags': []
  },
  {
    'emoji': '🔜',
    'description': 'SOON arrow',
    'category': 'Symbols',
    'aliases': [
      'soon'
    ],
    'tags': []
  },
  {
    'emoji': '✔️',
    'description': 'heavy check mark',
    'category': 'Symbols',
    'aliases': [
      'heavy_check_mark'
    ],
    'tags': []
  },
  {
    'emoji': '☑️',
    'description': 'ballot box with check',
    'category': 'Symbols',
    'aliases': [
      'ballot_box_with_check'
    ],
    'tags': []
  },
  {
    'emoji': '🔘',
    'description': 'radio button',
    'category': 'Symbols',
    'aliases': [
      'radio_button'
    ],
    'tags': []
  },
  {
    'emoji': '⚪️',
    'description': 'white circle',
    'category': 'Symbols',
    'aliases': [
      'white_circle'
    ],
    'tags': []
  },
  {
    'emoji': '⚫️',
    'description': 'black circle',
    'category': 'Symbols',
    'aliases': [
      'black_circle'
    ],
    'tags': []
  },
  {
    'emoji': '🔴',
    'description': 'red circle',
    'category': 'Symbols',
    'aliases': [
      'red_circle'
    ],
    'tags': []
  },
  {
    'emoji': '🔵',
    'description': 'blue circle',
    'category': 'Symbols',
    'aliases': [
      'large_blue_circle'
    ],
    'tags': []
  },
  {
    'emoji': '🔺',
    'description': 'red triangle pointed up',
    'category': 'Symbols',
    'aliases': [
      'small_red_triangle'
    ],
    'tags': []
  },
  {
    'emoji': '🔻',
    'description': 'red triangle pointed down',
    'category': 'Symbols',
    'aliases': [
      'small_red_triangle_down'
    ],
    'tags': []
  },
  {
    'emoji': '🔸',
    'description': 'small orange diamond',
    'category': 'Symbols',
    'aliases': [
      'small_orange_diamond'
    ],
    'tags': []
  },
  {
    'emoji': '🔹',
    'description': 'small blue diamond',
    'category': 'Symbols',
    'aliases': [
      'small_blue_diamond'
    ],
    'tags': []
  },
  {
    'emoji': '🔶',
    'description': 'large orange diamond',
    'category': 'Symbols',
    'aliases': [
      'large_orange_diamond'
    ],
    'tags': []
  },
  {
    'emoji': '🔷',
    'description': 'large blue diamond',
    'category': 'Symbols',
    'aliases': [
      'large_blue_diamond'
    ],
    'tags': []
  },
  {
    'emoji': '🔳',
    'description': 'white square button',
    'category': 'Symbols',
    'aliases': [
      'white_square_button'
    ],
    'tags': []
  },
  {
    'emoji': '🔲',
    'description': 'black square button',
    'category': 'Symbols',
    'aliases': [
      'black_square_button'
    ],
    'tags': []
  },
  {
    'emoji': '▪️',
    'description': 'black small square',
    'category': 'Symbols',
    'aliases': [
      'black_small_square'
    ],
    'tags': []
  },
  {
    'emoji': '▫️',
    'description': 'white small square',
    'category': 'Symbols',
    'aliases': [
      'white_small_square'
    ],
    'tags': []
  },
  {
    'emoji': '◾️',
    'description': 'black medium-small square',
    'category': 'Symbols',
    'aliases': [
      'black_medium_small_square'
    ],
    'tags': []
  },
  {
    'emoji': '◽️',
    'description': 'white medium-small square',
    'category': 'Symbols',
    'aliases': [
      'white_medium_small_square'
    ],
    'tags': []
  },
  {
    'emoji': '◼️',
    'description': 'black medium square',
    'category': 'Symbols',
    'aliases': [
      'black_medium_square'
    ],
    'tags': []
  },
  {
    'emoji': '◻️',
    'description': 'white medium square',
    'category': 'Symbols',
    'aliases': [
      'white_medium_square'
    ],
    'tags': []
  },
  {
    'emoji': '⬛️',
    'description': 'black large square',
    'category': 'Symbols',
    'aliases': [
      'black_large_square'
    ],
    'tags': []
  },
  {
    'emoji': '⬜️',
    'description': 'white large square',
    'category': 'Symbols',
    'aliases': [
      'white_large_square'
    ],
    'tags': []
  },
  {
    'emoji': '🔈',
    'description': 'speaker low volume',
    'category': 'Symbols',
    'aliases': [
      'speaker'
    ],
    'tags': []
  },
  {
    'emoji': '🔇',
    'description': 'muted speaker',
    'category': 'Symbols',
    'aliases': [
      'mute'
    ],
    'tags': [
      'sound',
      'volume'
    ]
  },
  {
    'emoji': '🔉',
    'description': 'speaker medium volume',
    'category': 'Symbols',
    'aliases': [
      'sound'
    ],
    'tags': [
      'volume'
    ]
  },
  {
    'emoji': '🔊',
    'description': 'speaker high volume',
    'category': 'Symbols',
    'aliases': [
      'loud_sound'
    ],
    'tags': [
      'volume'
    ]
  },
  {
    'emoji': '🔔',
    'description': 'bell',
    'category': 'Symbols',
    'aliases': [
      'bell'
    ],
    'tags': [
      'sound',
      'notification'
    ]
  },
  {
    'emoji': '🔕',
    'description': 'bell with slash',
    'category': 'Symbols',
    'aliases': [
      'no_bell'
    ],
    'tags': [
      'volume',
      'off'
    ]
  },
  {
    'emoji': '📣',
    'description': 'megaphone',
    'category': 'Symbols',
    'aliases': [
      'mega'
    ],
    'tags': []
  },
  {
    'emoji': '📢',
    'description': 'loudspeaker',
    'category': 'Symbols',
    'aliases': [
      'loudspeaker'
    ],
    'tags': [
      'announcement'
    ]
  },
  {
    'emoji': '👁‍🗨',
    'description': 'eye in speech bubble',
    'category': 'Symbols',
    'aliases': [
      'eye_speech_bubble'
    ],
    'tags': []
  },
  {
    'emoji': '💬',
    'description': 'speech balloon',
    'category': 'Symbols',
    'aliases': [
      'speech_balloon'
    ],
    'tags': [
      'comment'
    ]
  },
  {
    'emoji': '💭',
    'description': 'thought balloon',
    'category': 'Symbols',
    'aliases': [
      'thought_balloon'
    ],
    'tags': [
      'thinking'
    ]
  },
  {
    'emoji': '🗯',
    'description': 'right anger bubble',
    'category': 'Symbols',
    'aliases': [
      'right_anger_bubble'
    ],
    'tags': []
  },
  {
    'emoji': '♠️',
    'description': 'spade suit',
    'category': 'Symbols',
    'aliases': [
      'spades'
    ],
    'tags': []
  },
  {
    'emoji': '♣️',
    'description': 'club suit',
    'category': 'Symbols',
    'aliases': [
      'clubs'
    ],
    'tags': []
  },
  {
    'emoji': '♥️',
    'description': 'heart suit',
    'category': 'Symbols',
    'aliases': [
      'hearts'
    ],
    'tags': []
  },
  {
    'emoji': '♦️',
    'description': 'diamond suit',
    'category': 'Symbols',
    'aliases': [
      'diamonds'
    ],
    'tags': []
  },
  {
    'emoji': '🃏',
    'description': 'joker',
    'category': 'Symbols',
    'aliases': [
      'black_joker'
    ],
    'tags': []
  },
  {
    'emoji': '🎴',
    'description': 'flower playing cards',
    'category': 'Symbols',
    'aliases': [
      'flower_playing_cards'
    ],
    'tags': []
  },
  {
    'emoji': '🀄️',
    'description': 'mahjong red dragon',
    'category': 'Symbols',
    'aliases': [
      'mahjong'
    ],
    'tags': []
  },
  {
    'emoji': '🕐',
    'description': 'one o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock1'
    ],
    'tags': []
  },
  {
    'emoji': '🕑',
    'description': 'two o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock2'
    ],
    'tags': []
  },
  {
    'emoji': '🕒',
    'description': 'three o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock3'
    ],
    'tags': []
  },
  {
    'emoji': '🕓',
    'description': 'four o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock4'
    ],
    'tags': []
  },
  {
    'emoji': '🕔',
    'description': 'five o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock5'
    ],
    'tags': []
  },
  {
    'emoji': '🕕',
    'description': 'six o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock6'
    ],
    'tags': []
  },
  {
    'emoji': '🕖',
    'description': 'seven o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock7'
    ],
    'tags': []
  },
  {
    'emoji': '🕗',
    'description': 'eight o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock8'
    ],
    'tags': []
  },
  {
    'emoji': '🕘',
    'description': 'nine o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock9'
    ],
    'tags': []
  },
  {
    'emoji': '🕙',
    'description': 'ten o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock10'
    ],
    'tags': []
  },
  {
    'emoji': '🕚',
    'description': 'eleven o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock11'
    ],
    'tags': []
  },
  {
    'emoji': '🕛',
    'description': 'twelve o’clock',
    'category': 'Symbols',
    'aliases': [
      'clock12'
    ],
    'tags': []
  },
  {
    'emoji': '🕜',
    'description': 'one-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock130'
    ],
    'tags': []
  },
  {
    'emoji': '🕝',
    'description': 'two-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock230'
    ],
    'tags': []
  },
  {
    'emoji': '🕞',
    'description': 'three-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock330'
    ],
    'tags': []
  },
  {
    'emoji': '🕟',
    'description': 'four-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock430'
    ],
    'tags': []
  },
  {
    'emoji': '🕠',
    'description': 'five-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock530'
    ],
    'tags': []
  },
  {
    'emoji': '🕡',
    'description': 'six-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock630'
    ],
    'tags': []
  },
  {
    'emoji': '🕢',
    'description': 'seven-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock730'
    ],
    'tags': []
  },
  {
    'emoji': '🕣',
    'description': 'eight-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock830'
    ],
    'tags': []
  },
  {
    'emoji': '🕤',
    'description': 'nine-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock930'
    ],
    'tags': []
  },
  {
    'emoji': '🕥',
    'description': 'ten-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock1030'
    ],
    'tags': []
  },
  {
    'emoji': '🕦',
    'description': 'eleven-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock1130'
    ],
    'tags': []
  },
  {
    'emoji': '🕧',
    'description': 'twelve-thirty',
    'category': 'Symbols',
    'aliases': [
      'clock1230'
    ],
    'tags': []
  },
  {
    'emoji': '🏳️',
    'description': 'white flag',
    'category': 'Flags',
    'aliases': [
      'white_flag'
    ],
    'tags': []
  },
  {
    'emoji': '🏴',
    'description': 'black flag',
    'category': 'Flags',
    'aliases': [
      'black_flag'
    ],
    'tags': []
  },
  {
    'emoji': '🏁',
    'description': 'chequered flag',
    'category': 'Flags',
    'aliases': [
      'checkered_flag'
    ],
    'tags': [
      'milestone',
      'finish'
    ]
  },
  {
    'emoji': '🚩',
    'description': 'triangular flag',
    'category': 'Flags',
    'aliases': [
      'triangular_flag_on_post'
    ],
    'tags': []
  },
  {
    'emoji': '🏳️‍🌈',
    'description': 'rainbow flag',
    'category': 'Flags',
    'aliases': [
      'rainbow_flag'
    ],
    'tags': [
      'pride'
    ]
  },
  {
    'emoji': '🇦🇫',
    'description': 'Afghanistan',
    'category': 'Flags',
    'aliases': [
      'afghanistan'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇽',
    'description': 'Åland Islands',
    'category': 'Flags',
    'aliases': [
      'aland_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇱',
    'description': 'Albania',
    'category': 'Flags',
    'aliases': [
      'albania'
    ],
    'tags': []
  },
  {
    'emoji': '🇩🇿',
    'description': 'Algeria',
    'category': 'Flags',
    'aliases': [
      'algeria'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇸',
    'description': 'American Samoa',
    'category': 'Flags',
    'aliases': [
      'american_samoa'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇩',
    'description': 'Andorra',
    'category': 'Flags',
    'aliases': [
      'andorra'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇴',
    'description': 'Angola',
    'category': 'Flags',
    'aliases': [
      'angola'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇮',
    'description': 'Anguilla',
    'category': 'Flags',
    'aliases': [
      'anguilla'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇶',
    'description': 'Antarctica',
    'category': 'Flags',
    'aliases': [
      'antarctica'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇬',
    'description': 'Antigua & Barbuda',
    'category': 'Flags',
    'aliases': [
      'antigua_barbuda'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇷',
    'description': 'Argentina',
    'category': 'Flags',
    'aliases': [
      'argentina'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇲',
    'description': 'Armenia',
    'category': 'Flags',
    'aliases': [
      'armenia'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇼',
    'description': 'Aruba',
    'category': 'Flags',
    'aliases': [
      'aruba'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇺',
    'description': 'Australia',
    'category': 'Flags',
    'aliases': [
      'australia'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇹',
    'description': 'Austria',
    'category': 'Flags',
    'aliases': [
      'austria'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇿',
    'description': 'Azerbaijan',
    'category': 'Flags',
    'aliases': [
      'azerbaijan'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇸',
    'description': 'Bahamas',
    'category': 'Flags',
    'aliases': [
      'bahamas'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇭',
    'description': 'Bahrain',
    'category': 'Flags',
    'aliases': [
      'bahrain'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇩',
    'description': 'Bangladesh',
    'category': 'Flags',
    'aliases': [
      'bangladesh'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇧',
    'description': 'Barbados',
    'category': 'Flags',
    'aliases': [
      'barbados'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇾',
    'description': 'Belarus',
    'category': 'Flags',
    'aliases': [
      'belarus'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇪',
    'description': 'Belgium',
    'category': 'Flags',
    'aliases': [
      'belgium'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇿',
    'description': 'Belize',
    'category': 'Flags',
    'aliases': [
      'belize'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇯',
    'description': 'Benin',
    'category': 'Flags',
    'aliases': [
      'benin'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇲',
    'description': 'Bermuda',
    'category': 'Flags',
    'aliases': [
      'bermuda'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇹',
    'description': 'Bhutan',
    'category': 'Flags',
    'aliases': [
      'bhutan'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇴',
    'description': 'Bolivia',
    'category': 'Flags',
    'aliases': [
      'bolivia'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇶',
    'description': 'Caribbean Netherlands',
    'category': 'Flags',
    'aliases': [
      'caribbean_netherlands'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇦',
    'description': 'Bosnia & Herzegovina',
    'category': 'Flags',
    'aliases': [
      'bosnia_herzegovina'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇼',
    'description': 'Botswana',
    'category': 'Flags',
    'aliases': [
      'botswana'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇷',
    'description': 'Brazil',
    'category': 'Flags',
    'aliases': [
      'brazil'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇴',
    'description': 'British Indian Ocean Territory',
    'category': 'Flags',
    'aliases': [
      'british_indian_ocean_territory'
    ],
    'tags': []
  },
  {
    'emoji': '🇻🇬',
    'description': 'British Virgin Islands',
    'category': 'Flags',
    'aliases': [
      'british_virgin_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇳',
    'description': 'Brunei',
    'category': 'Flags',
    'aliases': [
      'brunei'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇬',
    'description': 'Bulgaria',
    'category': 'Flags',
    'aliases': [
      'bulgaria'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇫',
    'description': 'Burkina Faso',
    'category': 'Flags',
    'aliases': [
      'burkina_faso'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇮',
    'description': 'Burundi',
    'category': 'Flags',
    'aliases': [
      'burundi'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇻',
    'description': 'Cape Verde',
    'category': 'Flags',
    'aliases': [
      'cape_verde'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇭',
    'description': 'Cambodia',
    'category': 'Flags',
    'aliases': [
      'cambodia'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇲',
    'description': 'Cameroon',
    'category': 'Flags',
    'aliases': [
      'cameroon'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇦',
    'description': 'Canada',
    'category': 'Flags',
    'aliases': [
      'canada'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇨',
    'description': 'Canary Islands',
    'category': 'Flags',
    'aliases': [
      'canary_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇾',
    'description': 'Cayman Islands',
    'category': 'Flags',
    'aliases': [
      'cayman_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇫',
    'description': 'Central African Republic',
    'category': 'Flags',
    'aliases': [
      'central_african_republic'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇩',
    'description': 'Chad',
    'category': 'Flags',
    'aliases': [
      'chad'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇱',
    'description': 'Chile',
    'category': 'Flags',
    'aliases': [
      'chile'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇳',
    'description': 'China',
    'category': 'Flags',
    'aliases': [
      'cn'
    ],
    'tags': [
      'china'
    ]
  },
  {
    'emoji': '🇨🇽',
    'description': 'Christmas Island',
    'category': 'Flags',
    'aliases': [
      'christmas_island'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇨',
    'description': 'Cocos (Keeling) Islands',
    'category': 'Flags',
    'aliases': [
      'cocos_islands'
    ],
    'tags': [
      'keeling'
    ]
  },
  {
    'emoji': '🇨🇴',
    'description': 'Colombia',
    'category': 'Flags',
    'aliases': [
      'colombia'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇲',
    'description': 'Comoros',
    'category': 'Flags',
    'aliases': [
      'comoros'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇬',
    'description': 'Congo - Brazzaville',
    'category': 'Flags',
    'aliases': [
      'congo_brazzaville'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇩',
    'description': 'Congo - Kinshasa',
    'category': 'Flags',
    'aliases': [
      'congo_kinshasa'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇰',
    'description': 'Cook Islands',
    'category': 'Flags',
    'aliases': [
      'cook_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇷',
    'description': 'Costa Rica',
    'category': 'Flags',
    'aliases': [
      'costa_rica'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇮',
    'description': 'Côte d’Ivoire',
    'category': 'Flags',
    'aliases': [
      'cote_divoire'
    ],
    'tags': [
      'ivory'
    ]
  },
  {
    'emoji': '🇭🇷',
    'description': 'Croatia',
    'category': 'Flags',
    'aliases': [
      'croatia'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇺',
    'description': 'Cuba',
    'category': 'Flags',
    'aliases': [
      'cuba'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇼',
    'description': 'Curaçao',
    'category': 'Flags',
    'aliases': [
      'curacao'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇾',
    'description': 'Cyprus',
    'category': 'Flags',
    'aliases': [
      'cyprus'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇿',
    'description': 'Czech Republic',
    'category': 'Flags',
    'aliases': [
      'czech_republic'
    ],
    'tags': []
  },
  {
    'emoji': '🇩🇰',
    'description': 'Denmark',
    'category': 'Flags',
    'aliases': [
      'denmark'
    ],
    'tags': []
  },
  {
    'emoji': '🇩🇯',
    'description': 'Djibouti',
    'category': 'Flags',
    'aliases': [
      'djibouti'
    ],
    'tags': []
  },
  {
    'emoji': '🇩🇲',
    'description': 'Dominica',
    'category': 'Flags',
    'aliases': [
      'dominica'
    ],
    'tags': []
  },
  {
    'emoji': '🇩🇴',
    'description': 'Dominican Republic',
    'category': 'Flags',
    'aliases': [
      'dominican_republic'
    ],
    'tags': []
  },
  {
    'emoji': '🇪🇨',
    'description': 'Ecuador',
    'category': 'Flags',
    'aliases': [
      'ecuador'
    ],
    'tags': []
  },
  {
    'emoji': '🇪🇬',
    'description': 'Egypt',
    'category': 'Flags',
    'aliases': [
      'egypt'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇻',
    'description': 'El Salvador',
    'category': 'Flags',
    'aliases': [
      'el_salvador'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇶',
    'description': 'Equatorial Guinea',
    'category': 'Flags',
    'aliases': [
      'equatorial_guinea'
    ],
    'tags': []
  },
  {
    'emoji': '🇪🇷',
    'description': 'Eritrea',
    'category': 'Flags',
    'aliases': [
      'eritrea'
    ],
    'tags': []
  },
  {
    'emoji': '🇪🇪',
    'description': 'Estonia',
    'category': 'Flags',
    'aliases': [
      'estonia'
    ],
    'tags': []
  },
  {
    'emoji': '🇪🇹',
    'description': 'Ethiopia',
    'category': 'Flags',
    'aliases': [
      'ethiopia'
    ],
    'tags': []
  },
  {
    'emoji': '🇪🇺',
    'description': 'European Union',
    'category': 'Flags',
    'aliases': [
      'eu',
      'european_union'
    ],
    'tags': []
  },
  {
    'emoji': '🇫🇰',
    'description': 'Falkland Islands',
    'category': 'Flags',
    'aliases': [
      'falkland_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇫🇴',
    'description': 'Faroe Islands',
    'category': 'Flags',
    'aliases': [
      'faroe_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇫🇯',
    'description': 'Fiji',
    'category': 'Flags',
    'aliases': [
      'fiji'
    ],
    'tags': []
  },
  {
    'emoji': '🇫🇮',
    'description': 'Finland',
    'category': 'Flags',
    'aliases': [
      'finland'
    ],
    'tags': []
  },
  {
    'emoji': '🇫🇷',
    'description': 'France',
    'category': 'Flags',
    'aliases': [
      'fr'
    ],
    'tags': [
      'france',
      'french'
    ]
  },
  {
    'emoji': '🇬🇫',
    'description': 'French Guiana',
    'category': 'Flags',
    'aliases': [
      'french_guiana'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇫',
    'description': 'French Polynesia',
    'category': 'Flags',
    'aliases': [
      'french_polynesia'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇫',
    'description': 'French Southern Territories',
    'category': 'Flags',
    'aliases': [
      'french_southern_territories'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇦',
    'description': 'Gabon',
    'category': 'Flags',
    'aliases': [
      'gabon'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇲',
    'description': 'Gambia',
    'category': 'Flags',
    'aliases': [
      'gambia'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇪',
    'description': 'Georgia',
    'category': 'Flags',
    'aliases': [
      'georgia'
    ],
    'tags': []
  },
  {
    'emoji': '🇩🇪',
    'description': 'Germany',
    'category': 'Flags',
    'aliases': [
      'de'
    ],
    'tags': [
      'flag',
      'germany'
    ]
  },
  {
    'emoji': '🇬🇭',
    'description': 'Ghana',
    'category': 'Flags',
    'aliases': [
      'ghana'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇮',
    'description': 'Gibraltar',
    'category': 'Flags',
    'aliases': [
      'gibraltar'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇷',
    'description': 'Greece',
    'category': 'Flags',
    'aliases': [
      'greece'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇱',
    'description': 'Greenland',
    'category': 'Flags',
    'aliases': [
      'greenland'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇩',
    'description': 'Grenada',
    'category': 'Flags',
    'aliases': [
      'grenada'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇵',
    'description': 'Guadeloupe',
    'category': 'Flags',
    'aliases': [
      'guadeloupe'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇺',
    'description': 'Guam',
    'category': 'Flags',
    'aliases': [
      'guam'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇹',
    'description': 'Guatemala',
    'category': 'Flags',
    'aliases': [
      'guatemala'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇬',
    'description': 'Guernsey',
    'category': 'Flags',
    'aliases': [
      'guernsey'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇳',
    'description': 'Guinea',
    'category': 'Flags',
    'aliases': [
      'guinea'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇼',
    'description': 'Guinea-Bissau',
    'category': 'Flags',
    'aliases': [
      'guinea_bissau'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇾',
    'description': 'Guyana',
    'category': 'Flags',
    'aliases': [
      'guyana'
    ],
    'tags': []
  },
  {
    'emoji': '🇭🇹',
    'description': 'Haiti',
    'category': 'Flags',
    'aliases': [
      'haiti'
    ],
    'tags': []
  },
  {
    'emoji': '🇭🇳',
    'description': 'Honduras',
    'category': 'Flags',
    'aliases': [
      'honduras'
    ],
    'tags': []
  },
  {
    'emoji': '🇭🇰',
    'description': 'Hong Kong SAR China',
    'category': 'Flags',
    'aliases': [
      'hong_kong'
    ],
    'tags': []
  },
  {
    'emoji': '🇭🇺',
    'description': 'Hungary',
    'category': 'Flags',
    'aliases': [
      'hungary'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇸',
    'description': 'Iceland',
    'category': 'Flags',
    'aliases': [
      'iceland'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇳',
    'description': 'India',
    'category': 'Flags',
    'aliases': [
      'india'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇩',
    'description': 'Indonesia',
    'category': 'Flags',
    'aliases': [
      'indonesia'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇷',
    'description': 'Iran',
    'category': 'Flags',
    'aliases': [
      'iran'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇶',
    'description': 'Iraq',
    'category': 'Flags',
    'aliases': [
      'iraq'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇪',
    'description': 'Ireland',
    'category': 'Flags',
    'aliases': [
      'ireland'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇲',
    'description': 'Isle of Man',
    'category': 'Flags',
    'aliases': [
      'isle_of_man'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇱',
    'description': 'Israel',
    'category': 'Flags',
    'aliases': [
      'israel'
    ],
    'tags': []
  },
  {
    'emoji': '🇮🇹',
    'description': 'Italy',
    'category': 'Flags',
    'aliases': [
      'it'
    ],
    'tags': [
      'italy'
    ]
  },
  {
    'emoji': '🇯🇲',
    'description': 'Jamaica',
    'category': 'Flags',
    'aliases': [
      'jamaica'
    ],
    'tags': []
  },
  {
    'emoji': '🇯🇵',
    'description': 'Japan',
    'category': 'Flags',
    'aliases': [
      'jp'
    ],
    'tags': [
      'japan'
    ]
  },
  {
    'emoji': '🎌',
    'description': 'crossed flags',
    'category': 'Flags',
    'aliases': [
      'crossed_flags'
    ],
    'tags': []
  },
  {
    'emoji': '🇯🇪',
    'description': 'Jersey',
    'category': 'Flags',
    'aliases': [
      'jersey'
    ],
    'tags': []
  },
  {
    'emoji': '🇯🇴',
    'description': 'Jordan',
    'category': 'Flags',
    'aliases': [
      'jordan'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇿',
    'description': 'Kazakhstan',
    'category': 'Flags',
    'aliases': [
      'kazakhstan'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇪',
    'description': 'Kenya',
    'category': 'Flags',
    'aliases': [
      'kenya'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇮',
    'description': 'Kiribati',
    'category': 'Flags',
    'aliases': [
      'kiribati'
    ],
    'tags': []
  },
  {
    'emoji': '🇽🇰',
    'description': 'Kosovo',
    'category': 'Flags',
    'aliases': [
      'kosovo'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇼',
    'description': 'Kuwait',
    'category': 'Flags',
    'aliases': [
      'kuwait'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇬',
    'description': 'Kyrgyzstan',
    'category': 'Flags',
    'aliases': [
      'kyrgyzstan'
    ],
    'tags': []
  },
  {
    'emoji': '🇱🇦',
    'description': 'Laos',
    'category': 'Flags',
    'aliases': [
      'laos'
    ],
    'tags': []
  },
  {
    'emoji': '🇱🇻',
    'description': 'Latvia',
    'category': 'Flags',
    'aliases': [
      'latvia'
    ],
    'tags': []
  },
  {
    'emoji': '🇱🇧',
    'description': 'Lebanon',
    'category': 'Flags',
    'aliases': [
      'lebanon'
    ],
    'tags': []
  },
  {
    'emoji': '🇱🇸',
    'description': 'Lesotho',
    'category': 'Flags',
    'aliases': [
      'lesotho'
    ],
    'tags': []
  },
  {
    'emoji': '🇱🇷',
    'description': 'Liberia',
    'category': 'Flags',
    'aliases': [
      'liberia'
    ],
    'tags': []
  },
  {
    'emoji': '🇱🇾',
    'description': 'Libya',
    'category': 'Flags',
    'aliases': [
      'libya'
    ],
    'tags': []
  },
  {
    'emoji': '🇱🇮',
    'description': 'Liechtenstein',
    'category': 'Flags',
    'aliases': [
      'liechtenstein'
    ],
    'tags': []
  },
  {
    'emoji': '🇱🇹',
    'description': 'Lithuania',
    'category': 'Flags',
    'aliases': [
      'lithuania'
    ],
    'tags': []
  },
  {
    'emoji': '🇱🇺',
    'description': 'Luxembourg',
    'category': 'Flags',
    'aliases': [
      'luxembourg'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇴',
    'description': 'Macau SAR China',
    'category': 'Flags',
    'aliases': [
      'macau'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇰',
    'description': 'Macedonia',
    'category': 'Flags',
    'aliases': [
      'macedonia'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇬',
    'description': 'Madagascar',
    'category': 'Flags',
    'aliases': [
      'madagascar'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇼',
    'description': 'Malawi',
    'category': 'Flags',
    'aliases': [
      'malawi'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇾',
    'description': 'Malaysia',
    'category': 'Flags',
    'aliases': [
      'malaysia'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇻',
    'description': 'Maldives',
    'category': 'Flags',
    'aliases': [
      'maldives'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇱',
    'description': 'Mali',
    'category': 'Flags',
    'aliases': [
      'mali'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇹',
    'description': 'Malta',
    'category': 'Flags',
    'aliases': [
      'malta'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇭',
    'description': 'Marshall Islands',
    'category': 'Flags',
    'aliases': [
      'marshall_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇶',
    'description': 'Martinique',
    'category': 'Flags',
    'aliases': [
      'martinique'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇷',
    'description': 'Mauritania',
    'category': 'Flags',
    'aliases': [
      'mauritania'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇺',
    'description': 'Mauritius',
    'category': 'Flags',
    'aliases': [
      'mauritius'
    ],
    'tags': []
  },
  {
    'emoji': '🇾🇹',
    'description': 'Mayotte',
    'category': 'Flags',
    'aliases': [
      'mayotte'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇽',
    'description': 'Mexico',
    'category': 'Flags',
    'aliases': [
      'mexico'
    ],
    'tags': []
  },
  {
    'emoji': '🇫🇲',
    'description': 'Micronesia',
    'category': 'Flags',
    'aliases': [
      'micronesia'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇩',
    'description': 'Moldova',
    'category': 'Flags',
    'aliases': [
      'moldova'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇨',
    'description': 'Monaco',
    'category': 'Flags',
    'aliases': [
      'monaco'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇳',
    'description': 'Mongolia',
    'category': 'Flags',
    'aliases': [
      'mongolia'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇪',
    'description': 'Montenegro',
    'category': 'Flags',
    'aliases': [
      'montenegro'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇸',
    'description': 'Montserrat',
    'category': 'Flags',
    'aliases': [
      'montserrat'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇦',
    'description': 'Morocco',
    'category': 'Flags',
    'aliases': [
      'morocco'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇿',
    'description': 'Mozambique',
    'category': 'Flags',
    'aliases': [
      'mozambique'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇲',
    'description': 'Myanmar (Burma)',
    'category': 'Flags',
    'aliases': [
      'myanmar'
    ],
    'tags': [
      'burma'
    ]
  },
  {
    'emoji': '🇳🇦',
    'description': 'Namibia',
    'category': 'Flags',
    'aliases': [
      'namibia'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇷',
    'description': 'Nauru',
    'category': 'Flags',
    'aliases': [
      'nauru'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇵',
    'description': 'Nepal',
    'category': 'Flags',
    'aliases': [
      'nepal'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇱',
    'description': 'Netherlands',
    'category': 'Flags',
    'aliases': [
      'netherlands'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇨',
    'description': 'New Caledonia',
    'category': 'Flags',
    'aliases': [
      'new_caledonia'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇿',
    'description': 'New Zealand',
    'category': 'Flags',
    'aliases': [
      'new_zealand'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇮',
    'description': 'Nicaragua',
    'category': 'Flags',
    'aliases': [
      'nicaragua'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇪',
    'description': 'Niger',
    'category': 'Flags',
    'aliases': [
      'niger'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇬',
    'description': 'Nigeria',
    'category': 'Flags',
    'aliases': [
      'nigeria'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇺',
    'description': 'Niue',
    'category': 'Flags',
    'aliases': [
      'niue'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇫',
    'description': 'Norfolk Island',
    'category': 'Flags',
    'aliases': [
      'norfolk_island'
    ],
    'tags': []
  },
  {
    'emoji': '🇲🇵',
    'description': 'Northern Mariana Islands',
    'category': 'Flags',
    'aliases': [
      'northern_mariana_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇵',
    'description': 'North Korea',
    'category': 'Flags',
    'aliases': [
      'north_korea'
    ],
    'tags': []
  },
  {
    'emoji': '🇳🇴',
    'description': 'Norway',
    'category': 'Flags',
    'aliases': [
      'norway'
    ],
    'tags': []
  },
  {
    'emoji': '🇴🇲',
    'description': 'Oman',
    'category': 'Flags',
    'aliases': [
      'oman'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇰',
    'description': 'Pakistan',
    'category': 'Flags',
    'aliases': [
      'pakistan'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇼',
    'description': 'Palau',
    'category': 'Flags',
    'aliases': [
      'palau'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇸',
    'description': 'Palestinian Territories',
    'category': 'Flags',
    'aliases': [
      'palestinian_territories'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇦',
    'description': 'Panama',
    'category': 'Flags',
    'aliases': [
      'panama'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇬',
    'description': 'Papua New Guinea',
    'category': 'Flags',
    'aliases': [
      'papua_new_guinea'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇾',
    'description': 'Paraguay',
    'category': 'Flags',
    'aliases': [
      'paraguay'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇪',
    'description': 'Peru',
    'category': 'Flags',
    'aliases': [
      'peru'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇭',
    'description': 'Philippines',
    'category': 'Flags',
    'aliases': [
      'philippines'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇳',
    'description': 'Pitcairn Islands',
    'category': 'Flags',
    'aliases': [
      'pitcairn_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇱',
    'description': 'Poland',
    'category': 'Flags',
    'aliases': [
      'poland'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇹',
    'description': 'Portugal',
    'category': 'Flags',
    'aliases': [
      'portugal'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇷',
    'description': 'Puerto Rico',
    'category': 'Flags',
    'aliases': [
      'puerto_rico'
    ],
    'tags': []
  },
  {
    'emoji': '🇶🇦',
    'description': 'Qatar',
    'category': 'Flags',
    'aliases': [
      'qatar'
    ],
    'tags': []
  },
  {
    'emoji': '🇷🇪',
    'description': 'Réunion',
    'category': 'Flags',
    'aliases': [
      'reunion'
    ],
    'tags': []
  },
  {
    'emoji': '🇷🇴',
    'description': 'Romania',
    'category': 'Flags',
    'aliases': [
      'romania'
    ],
    'tags': []
  },
  {
    'emoji': '🇷🇺',
    'description': 'Russia',
    'category': 'Flags',
    'aliases': [
      'ru'
    ],
    'tags': [
      'russia'
    ]
  },
  {
    'emoji': '🇷🇼',
    'description': 'Rwanda',
    'category': 'Flags',
    'aliases': [
      'rwanda'
    ],
    'tags': []
  },
  {
    'emoji': '🇧🇱',
    'description': 'St. Barthélemy',
    'category': 'Flags',
    'aliases': [
      'st_barthelemy'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇭',
    'description': 'St. Helena',
    'category': 'Flags',
    'aliases': [
      'st_helena'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇳',
    'description': 'St. Kitts & Nevis',
    'category': 'Flags',
    'aliases': [
      'st_kitts_nevis'
    ],
    'tags': []
  },
  {
    'emoji': '🇱🇨',
    'description': 'St. Lucia',
    'category': 'Flags',
    'aliases': [
      'st_lucia'
    ],
    'tags': []
  },
  {
    'emoji': '🇵🇲',
    'description': 'St. Pierre & Miquelon',
    'category': 'Flags',
    'aliases': [
      'st_pierre_miquelon'
    ],
    'tags': []
  },
  {
    'emoji': '🇻🇨',
    'description': 'St. Vincent & Grenadines',
    'category': 'Flags',
    'aliases': [
      'st_vincent_grenadines'
    ],
    'tags': []
  },
  {
    'emoji': '🇼🇸',
    'description': 'Samoa',
    'category': 'Flags',
    'aliases': [
      'samoa'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇲',
    'description': 'San Marino',
    'category': 'Flags',
    'aliases': [
      'san_marino'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇹',
    'description': 'São Tomé & Príncipe',
    'category': 'Flags',
    'aliases': [
      'sao_tome_principe'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇦',
    'description': 'Saudi Arabia',
    'category': 'Flags',
    'aliases': [
      'saudi_arabia'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇳',
    'description': 'Senegal',
    'category': 'Flags',
    'aliases': [
      'senegal'
    ],
    'tags': []
  },
  {
    'emoji': '🇷🇸',
    'description': 'Serbia',
    'category': 'Flags',
    'aliases': [
      'serbia'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇨',
    'description': 'Seychelles',
    'category': 'Flags',
    'aliases': [
      'seychelles'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇱',
    'description': 'Sierra Leone',
    'category': 'Flags',
    'aliases': [
      'sierra_leone'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇬',
    'description': 'Singapore',
    'category': 'Flags',
    'aliases': [
      'singapore'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇽',
    'description': 'Sint Maarten',
    'category': 'Flags',
    'aliases': [
      'sint_maarten'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇰',
    'description': 'Slovakia',
    'category': 'Flags',
    'aliases': [
      'slovakia'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇮',
    'description': 'Slovenia',
    'category': 'Flags',
    'aliases': [
      'slovenia'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇧',
    'description': 'Solomon Islands',
    'category': 'Flags',
    'aliases': [
      'solomon_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇴',
    'description': 'Somalia',
    'category': 'Flags',
    'aliases': [
      'somalia'
    ],
    'tags': []
  },
  {
    'emoji': '🇿🇦',
    'description': 'South Africa',
    'category': 'Flags',
    'aliases': [
      'south_africa'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇸',
    'description': 'South Georgia & South Sandwich Islands',
    'category': 'Flags',
    'aliases': [
      'south_georgia_south_sandwich_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇰🇷',
    'description': 'South Korea',
    'category': 'Flags',
    'aliases': [
      'kr'
    ],
    'tags': [
      'korea'
    ]
  },
  {
    'emoji': '🇸🇸',
    'description': 'South Sudan',
    'category': 'Flags',
    'aliases': [
      'south_sudan'
    ],
    'tags': []
  },
  {
    'emoji': '🇪🇸',
    'description': 'Spain',
    'category': 'Flags',
    'aliases': [
      'es'
    ],
    'tags': [
      'spain'
    ]
  },
  {
    'emoji': '🇱🇰',
    'description': 'Sri Lanka',
    'category': 'Flags',
    'aliases': [
      'sri_lanka'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇩',
    'description': 'Sudan',
    'category': 'Flags',
    'aliases': [
      'sudan'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇷',
    'description': 'Suriname',
    'category': 'Flags',
    'aliases': [
      'suriname'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇿',
    'description': 'Swaziland',
    'category': 'Flags',
    'aliases': [
      'swaziland'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇪',
    'description': 'Sweden',
    'category': 'Flags',
    'aliases': [
      'sweden'
    ],
    'tags': []
  },
  {
    'emoji': '🇨🇭',
    'description': 'Switzerland',
    'category': 'Flags',
    'aliases': [
      'switzerland'
    ],
    'tags': []
  },
  {
    'emoji': '🇸🇾',
    'description': 'Syria',
    'category': 'Flags',
    'aliases': [
      'syria'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇼',
    'description': 'Taiwan',
    'category': 'Flags',
    'aliases': [
      'taiwan'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇯',
    'description': 'Tajikistan',
    'category': 'Flags',
    'aliases': [
      'tajikistan'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇿',
    'description': 'Tanzania',
    'category': 'Flags',
    'aliases': [
      'tanzania'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇭',
    'description': 'Thailand',
    'category': 'Flags',
    'aliases': [
      'thailand'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇱',
    'description': 'Timor-Leste',
    'category': 'Flags',
    'aliases': [
      'timor_leste'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇬',
    'description': 'Togo',
    'category': 'Flags',
    'aliases': [
      'togo'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇰',
    'description': 'Tokelau',
    'category': 'Flags',
    'aliases': [
      'tokelau'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇴',
    'description': 'Tonga',
    'category': 'Flags',
    'aliases': [
      'tonga'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇹',
    'description': 'Trinidad & Tobago',
    'category': 'Flags',
    'aliases': [
      'trinidad_tobago'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇳',
    'description': 'Tunisia',
    'category': 'Flags',
    'aliases': [
      'tunisia'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇷',
    'description': 'Turkey',
    'category': 'Flags',
    'aliases': [
      'tr'
    ],
    'tags': [
      'turkey'
    ]
  },
  {
    'emoji': '🇹🇲',
    'description': 'Turkmenistan',
    'category': 'Flags',
    'aliases': [
      'turkmenistan'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇨',
    'description': 'Turks & Caicos Islands',
    'category': 'Flags',
    'aliases': [
      'turks_caicos_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇹🇻',
    'description': 'Tuvalu',
    'category': 'Flags',
    'aliases': [
      'tuvalu'
    ],
    'tags': []
  },
  {
    'emoji': '🇺🇬',
    'description': 'Uganda',
    'category': 'Flags',
    'aliases': [
      'uganda'
    ],
    'tags': []
  },
  {
    'emoji': '🇺🇦',
    'description': 'Ukraine',
    'category': 'Flags',
    'aliases': [
      'ukraine'
    ],
    'tags': []
  },
  {
    'emoji': '🇦🇪',
    'description': 'United Arab Emirates',
    'category': 'Flags',
    'aliases': [
      'united_arab_emirates'
    ],
    'tags': []
  },
  {
    'emoji': '🇬🇧',
    'description': 'United Kingdom',
    'category': 'Flags',
    'aliases': [
      'gb',
      'uk'
    ],
    'tags': [
      'flag',
      'british'
    ]
  },
  {
    'emoji': '🇺🇸',
    'description': 'United States',
    'category': 'Flags',
    'aliases': [
      'us'
    ],
    'tags': [
      'flag',
      'united',
      'america'
    ]
  },
  {
    'emoji': '🇻🇮',
    'description': 'U.S. Virgin Islands',
    'category': 'Flags',
    'aliases': [
      'us_virgin_islands'
    ],
    'tags': []
  },
  {
    'emoji': '🇺🇾',
    'description': 'Uruguay',
    'category': 'Flags',
    'aliases': [
      'uruguay'
    ],
    'tags': []
  },
  {
    'emoji': '🇺🇿',
    'description': 'Uzbekistan',
    'category': 'Flags',
    'aliases': [
      'uzbekistan'
    ],
    'tags': []
  },
  {
    'emoji': '🇻🇺',
    'description': 'Vanuatu',
    'category': 'Flags',
    'aliases': [
      'vanuatu'
    ],
    'tags': []
  },
  {
    'emoji': '🇻🇦',
    'description': 'Vatican City',
    'category': 'Flags',
    'aliases': [
      'vatican_city'
    ],
    'tags': []
  },
  {
    'emoji': '🇻🇪',
    'description': 'Venezuela',
    'category': 'Flags',
    'aliases': [
      'venezuela'
    ],
    'tags': []
  },
  {
    'emoji': '🇻🇳',
    'description': 'Vietnam',
    'category': 'Flags',
    'aliases': [
      'vietnam'
    ],
    'tags': []
  },
  {
    'emoji': '🇼🇫',
    'description': 'Wallis & Futuna',
    'category': 'Flags',
    'aliases': [
      'wallis_futuna'
    ],
    'tags': []
  },
  {
    'emoji': '🇪🇭',
    'description': 'Western Sahara',
    'category': 'Flags',
    'aliases': [
      'western_sahara'
    ],
    'tags': []
  },
  {
    'emoji': '🇾🇪',
    'description': 'Yemen',
    'category': 'Flags',
    'aliases': [
      'yemen'
    ],
    'tags': []
  },
  {
    'emoji': '🇿🇲',
    'description': 'Zambia',
    'category': 'Flags',
    'aliases': [
      'zambia'
    ],
    'tags': []
  },
  {
    'emoji': '🇿🇼',
    'description': 'Zimbabwe',
    'category': 'Flags',
    'aliases': [
      'zimbabwe'
    ],
    'tags': []
  }
]

export default emojis
