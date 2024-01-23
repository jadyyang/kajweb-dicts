const simpleDemo = {
  "wordRank": 114, // 单词序号
  "headWord": "cancel", // 单词
  "bookId": "CET4_1", // 所在词书

  "content": {
    "word": {
      "wordHead": "cancel", // 单词
      "content": {
        // 音标
        "usphone": "'kænsl", // 美音
        "ukphone": "'kænsl", // 英音

        // 发音文件地址
        "usspeech": "cancel&type=2", // 美音
        "ukspeech": "cancel&type=1", // 英音

        // 释义
        "trans": [{
          "pos": "v", // 词性
          "tranCn": "取消", // 中文释义
          "tranOther": "to decide that something that was officially planned will not happen", // 英文解释

          // 没用的属性
          "descCn": "中释",
          "descOther": "英释"
        }],

        // 例句
        "sentence": {
          "sentences": [{
            "sContent": "Our flight was cancelled.", // 英语
            "sCn": "我们的航班取消了。" // 中文
          }]
        },

        // 单词相关测试
        "exam": [{
          // 测试类型
          "examType": 1,
          // 问题
          "question": "As we can no longer wait for the delivery of our order, we have to _______ it.",
          // 选项
          "choices": [
            { "choiceIndex": 1, "choice": "postpone" },
            { "choiceIndex": 2, "choice": "refuse" },
            { "choiceIndex": 3, "choice": "delay" },
            { "choiceIndex": 4, "choice": "cancel" }
          ],
          // 答案
          "answer": {
            "explain": " cancel order：  取消订单。 句意：  订购的货物尚未送到， 我们不能再等了， 不得不取消订单。 postpone：  推迟， 使延期； refuse：  拒绝， 谢绝； delay：  耽搁， 延迟， 延期。",
            "rightIndex": 4
          }
        }],

        // 近义词
        "syno": {
          "synos": [{
            "pos": "vt", // 词性
            "tran": "[计]取消；删去", // 释义

            // 单词或词组
            "hwds": [{ 
              "w": "recall"
            }, { 
              "w": "call it off" 
            }]
          }]
        },

        // 短语
        "phrase": {
          "phrases": [{ 
            "pContent": "cancel button", // 短语
            "pCn": "取消按钮" // 释义
          }]
        },

        // 同根词
        "relWord": {
          "rels": [{
            "pos": "n", // 词性
            "words": [{ 
              "hwd": "cancellation", // 英文
              "tran": " 取消；删除" // 翻译
            }]
          }]
        },

        // 暂不知用途
        "star": 0,
        "speech": "cancel",
      }
    }
  }
};

const demo = {
  // 单词序号
  "wordRank": 114,
  // 单词
  "headWord": "cancel",
  "content": {
    "word": {
      "wordHead": "cancel",
      "wordId": "CET4_1_114",
      "content": {

        // 音标
        "usphone": "'kænsl", // 美音
        "ukphone": "'kænsl", // 英音

        // 发音文件地址
        "usspeech": "cancel&type=2",
        "ukspeech": "cancel&type=1",

        // 释义
        "trans": [
          {
            // 词性
            "pos": "v",

            // 中文解释
            "tranCn": "取消",
            "descCn": "中释",

            // 英文解释
            "tranOther": "to decide that something that was officially planned will not happen",
            "descOther": "英释"
          }
        ],

        // 例句
        "sentence": {
          "sentences": [
            {
              // 英语
              "sContent": "Our flight was cancelled.",
              // 中文
              "sCn": "我们的航班取消了。"
            },
            {
              "sContent": "I’m afraid I’ll have to cancel our meeting tomorrow.",
              "sCn": "恐怕我得取消我们明天的会议。"
            },
            {
              "sContent": "You’ll just have to ring John and cancel.",
              "sCn": "你只能打电话给约翰取消了。"
            }
          ],
          // 描述
          "desc": "例句"
        },

        // 单词相关测试
        "exam": [
          {
            // 问题
            "question": "As we can no longer wait for the delivery of our order, we have to _______ it.",
            // 答案
            "answer": {
              "explain": " cancel order：  取消订单。 句意：  订购的货物尚未送到， 我们不能再等了， 不得不取消订单。 postpone：  推迟， 使延期； refuse：  拒绝， 谢绝； delay：  耽搁， 延迟， 延期。",
              "rightIndex": 4
            },
            // 测试类型
            "examType": 1,
            // 选项
            "choices": [
              { "choiceIndex": 1, "choice": "postpone" },
              { "choiceIndex": 2, "choice": "refuse" },
              { "choiceIndex": 3, "choice": "delay" },
              { "choiceIndex": 4, "choice": "cancel" }
            ]
          }
        ],

        // 近义词
        "syno": {
          "synos": [
            {
              // 词性
              "pos": "vt",
              // 释义
              "tran": "[计]取消；删去",
              // 单词或词组
              "hwds": [{ "w": "recall" }, { "w": "call it off" }]
            },
            {
              "pos": "vi",
              "tran": "[计]取消；相互抵销",
              "hwds": [{ "w": "call it off" }, { "w": "declare off" }]
            },
            {
              "pos": "n",
              "tran": "[计]取消，撤销",
              "hwds": [{ "w": "withdrawal" }, { "w": "revocation" }]
            }
          ],
          // 描述
          "desc": "同近"
        },

        // 短语
        "phrase": {
          "phrases": [
            { 
              // 短语
              "pContent": "cancel button", 
              // 释义
              "pCn": "取消按钮"
            },
            { "pContent": "cancel out", "pCn": "取消；抵销" },
            { "pContent": "cancel after verification", "pCn": "核销" }
          ],
          // 描述
          "desc": "短语"
        },

        // 同根词
        "relWord": {
          "rels": [
            {
              // 词性
              "pos": "n",
              "words": [{ 
                // 英文
                "hwd": "cancellation", 
                // 翻译
                "tran": " 取消；删除" 
              }]
            }
          ],
          // 描述
          "desc": "同根"
        },

        "star": 0,

        "speech": "cancel",
      }
    }
  },
  "bookId": "CET4_1"
};
