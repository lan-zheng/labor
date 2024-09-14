const levels = [
    {
        name: "青铜试炼场",
        questions: [
            {
                question: "固定期限的劳动合同的最长期限是多少年？",
                options: ["3年", "5年", "10年", "无固定期限"],
                correctAnswer: 2
            },
            {
                question: "试用期最长不得超过多少个月？",
                options: ["1个月", "3个月", "6个月", "12个月"],
                correctAnswer: 2
            },
            {
                question: "劳动者每日工作时间不得超过多少小时？",
                options: ["6小时", "8小时", "10小时", "12小时"],
                correctAnswer: 1
            },
            {
                question: "用人单位招用劳动者，应当与劳动者签订劳动合同的期限是？",
                options: ["招用之日起", "一周内", "一个月内", "三个月内"],
                correctAnswer: 2
            },
            {
                question: "劳动者在同一用人单位连续工作满多少年，可以签订无固定期限劳动合同？",
                options: ["5年", "10年", "15年", "20年"],
                correctAnswer: 1
            }
        ]
    },
    {
        name: "白银挑战关",
        questions: [
            {
                question: "员工请事假，工资如何支付？",
                options: ["全额支付", "不支付工资", "按照劳动合同约定支付", "由用人单位自行决定"],
                correctAnswer: 1
            },
            {
                question: "劳动者在试用期内被证明不符合录用条件，用人单位可以解除劳动合同吗？",
                options: ["可以", "不可以", "需要支付赔偿金", "需要前30天通知"],
                correctAnswer: 0
            },
            {
                question: "法定年休假最少多少天？",
                options: ["5天", "10天", "15天", "20天"],
                correctAnswer: 0
            },
            {
                question: "用人单位自用工之日起满一年不与劳动者订立书面劳动合同的，视为与劳动者建立什么关系？",
                options: ["劳务关系", "无固定期限劳动合同关系", "临时工关系", "实习关系"],
                correctAnswer: 1
            },
            {
                question: "劳动者在法定节假日工作，工资应当如何支付？",
                options: ["正常工资", "双倍工资", "三倍工资", "四倍工资"],
                correctAnswer: 2
            }
        ]
    },
    {
        name: "黄金闯关境",
        questions: [
            {
                question: "劳动者在怀孕期间，用人单位能否解除劳动合同？",
                options: ["可以", "不可以", "视情况而定", "需要劳动者同意"],
                correctAnswer: 1
            },
            {
                question: "劳动者在产假期间，工资应如何支付？",
                options: ["不支付", "全额支付", "按照生育保险规定支付", "由用人单位自行决定"],
                correctAnswer: 2
            },
            {
                question: "用人单位安排加班的，加班时间每日不得超过多少小时？",
                options: ["1小时", "2小时", "3小时", "4小时"],
                correctAnswer: 2
            },
            {
                question: "劳动者在工作时间内参加职工培训的，应视为什么？",
                options: ["正常工作时间", "加班时间", "休息时间", "个人时间"],
                correctAnswer: 0
            },
            {
                question: "用人单位违法解除劳动合同的，应向劳动者支付n 的几倍工资的赔偿金？",
                options: ["1倍", "2倍", "3倍", "4 倍"],
                correctAnswer: 1
            }
        ]
    },
    {
        name: "铂金突破关",
        questions: [
            {
                question: "劳动者在本单位工作满10年，提前30天通知用人单位，可以单方解除劳动合同吗？",
                options: ["可以", "不可以", "需要用人单位同意", "需要支付赔偿金"],
                correctAnswer: 0
            },
            {
                question: "用人单位未及时足额支付劳动报酬的，应加付劳动者的赔偿金为欠付金额的多少？",
                options: ["20%", "50%", "80%", "100%"],
                correctAnswer: 1
            },
            {
                question: "劳动者在试用期内提出解除劳动合同，需要提前多久通知用人单位？",
                options: ["不需要提前通知", "3天", "7天", "30天"],
                correctAnswer: 0
            },
            {
                question: "用人单位违反劳动合同约定的保密义务给劳动者造成损失的，应承担什么责任？",
                options: ["道歉", "赔偿损失", "继续履行", "解除劳动合同"],
                correctAnswer: 1
            },
            {
                question: "劳动者在工作中受到工伤，医疗期满后不能从事原工作也不能从事用人单位另行安排的工作的，用人单位应如何处理？",
                options: ["解除劳动合同", "降低工资", "安排其他工作", "按工伤保险条例的规定支付伤残就业补助金"],
                correctAnswer: 3
            }
        ]
    },
    {
        name: "钻石考验关",
        questions: [
            {
                question: "用人单位招用与其他用人单位有劳动合同的劳动者，给其他用人单位造成损失的，应承担什么责任？",
                options: ["不承担责任", "承担连带赔偿责任", "承担部分赔偿责任", "由劳动者自行承担责任"],
                correctAnswer: 1
            },
            {
                question: "劳动者在离职时，用人单位应当如何出具相关证明？",
                options: ["不需要出具", "只需口头告知", "书面出具并如实记载劳动合同期限、解除或终止劳动合同的日期、工作岗位、在本单位的工作年限", "由劳动者自行准备"],
                correctAnswer: 2
            },
            {
                question: "用人单位违反法律规定解除或者终止劳动合同，劳动者要求继续履行劳动合同的，用人单位应当如何处理？",
                options: ["拒绝", "协商解决", "继续履行", "支付赔偿金了事"],
                correctAnswer: 2
            },
            {
                question: "劳动者在工作时间以外兼职，对本职工作没有影响的，用人单位能否禁止？",
                options: ["可以", "不可以", "需要劳动者申请", "由用人单位自行决定"],
                correctAnswer: 1
            },
            {
                question: "用人单位自用工之日起超过一个月不满一年未与劳动者订立书面劳动合同的，应当向劳动者每月支付多少倍的工资？",
                options: ["1倍", "1.5倍", "2倍", "3倍"],
                correctAnswer: 2
            }
        ]
    },
    {
        name: "星耀试炼关",
        questions: [
            {
                question: "用人单位违反劳动法律、法规或者劳动合同约定，劳动者可以如何维权？",
                options: ["向劳动监察部门投诉", "向劳动争议仲裁委员会申请仲裁", "向人民法院起诉", "以上都可以"],
                correctAnswer: 3
            },
            {
                question: "劳动者在工作中因工负伤，用人单位不依法申报工伤的，劳动者可以在多长时间内自行申请工伤认定？",
                options: ["6个月", "1年", "2年", "3年"],
                correctAnswer: 1
            },
            {
                question: "用人单位与劳动者约定的竞业限制期限不得超过多长时间？",
                options: ["6个月", "1年", "2年", "3年"],
                correctAnswer: 2
            },
            {
                question: "劳动者在试用期内提出解除劳动合同，用人单位是否可以要求其支付违约金？",
                options: ["可以", "不可以", "视情况而定", "由双方协商决定"],
                correctAnswer: 1
            },
            {
                question: "用人单位违法延长劳动时间的，由劳动行政部门给予警告、责令改正，并可以处以多少罚款？",
                options: ["1万元以下", "2万元以下", "5万元以下", "10万元以下"],
                correctAnswer: 2
            }
        ]
    },
    {
        name: "王者终极挑战",
        questions: [
            {
                question: "劳动者在同一用人单位工作满多少年，可以与用人单位订立无固定期限劳动合同？",
                options: ["5年", "10年", "15年", "20年"],
                correctAnswer: 1
            },
            {
                question: "用人单位违反劳动合同约定的保密义务给劳动者造成损失的，应承担什么责任？",
                options: ["道歉", "赔偿损失", "继续履行", "解除劳动合同"],
                correctAnswer: 1
            },
            {
                question: "劳动者在工作中患职业病的，用人单位应承担什么责任？",
                options: ["不承担责任", "只承担医疗费用", "按照工伤保险条例的规定承担责任", "由双方协商决定"],
                correctAnswer: 2
            },
            {
                question: "用人单位招用未成年工的，应当对其进行何种体检？",
                options: ["常规体检", "专门体检", "不需要体检", "由未成年工自行决定"],
                correctAnswer: 1
            },
            {
                question: "劳动者在法定工作时间内依法参加社会活动的，用人单位应当如何处理？",
                options: ["扣除工资", "视为旷工", "视为正常劳动", "由用人单位自行决定"],
                correctAnswer: 2
            }
        ]
    }
];

let currentLevel = 0;
let currentQuestion = 0;
let score = 0;
let lives = 3;
let timer;

const startGameBtn = document.getElementById('start-game');
const restartGameBtn = document.getElementById('restart-game');
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const levelElement = document.getElementById('level');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');
const timerElement = document.getElementById('timer');
const finalScoreElement = document.getElementById('final-score');

startGameBtn.addEventListener('click', loadProgress);
restartGameBtn.addEventListener('click', startGame);

function startGame() {
    currentLevel = 0;
    currentQuestion = 0;
    score = 0;
    lives = 3;
    welcomeScreen.style.display = 'none';
    gameOverScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    if (currentLevel >= levels.length) {
        endGame(true);
        return;
    }

    const level = levels[currentLevel];
    if (currentQuestion >= level.questions.length) {
        completeLevel();
        return;
    }

    const question = level.questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(button);
    });

    levelElement.textContent = `关卡: ${currentLevel + 1} - ${level.name}`;
    scoreElement.textContent = `得分: ${score}`;
    livesElement.textContent = `生命值: ${lives}`;

    startTimer();
}

function startTimer() {
    let timeLeft = Math.max(30, 60 - currentLevel * 5); // 确保最少有30秒
    timerElement.textContent = `剩余时间: ${timeLeft}秒`;
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `剩余时间: ${timeLeft}秒`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(-1);
        }
    }, 1000);
}

function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const question = levels[currentLevel].questions[currentQuestion];
    let feedback = document.createElement('div');
    feedback.style.marginTop = '10px';
    feedback.style.fontWeight = 'bold';

    if (selectedIndex === question.correctAnswer) {
        score += 10 + currentLevel * 2;
        feedback.textContent = "回答正确！";
        feedback.style.color = 'green';
    } else {
        score -= 5;
        lives--;
        feedback.textContent = `回答错误。正确答案是：${question.options[question.correctAnswer]}`;
        feedback.style.color = 'red';
    }

    optionsElement.appendChild(feedback);

    setTimeout(() => {
        if (lives <= 0) {
            endGame(false);
        } else {
            currentQuestion++;
            loadQuestion();
        }
    }, 2000);
}

function completeLevel() {
    const requiredScore = (currentLevel + 1) * 50;
    if (score >= requiredScore) {
        alert(`恭喜通过第 ${currentLevel + 1} 关！准备好迎接下一个挑战了吗？`);
        currentLevel++;
        currentQuestion = 0;
        lives = Math.min(lives + 1, 3); // 每过一关恢复一点生命值，最多3点
        loadQuestion();
    } else {
        endGame(false);
    }
}

function endGame(isWin) {
    gameScreen.style.display = 'none';
    gameOverScreen.style.display = 'block';
    if (isWin) {
        finalScoreElement.textContent = `恭喜你通关所有 7 个级别！最终得分: ${score}`;
    } else {
        finalScoreElement.textContent = `游戏结束。你在第 ${currentLevel + 1} 关失败。最终得分: ${score}`;
    }
    saveProgress(); // 保存游戏进度
}

function saveProgress() {
    localStorage.setItem('gameProgress', JSON.stringify({
        currentLevel,
        currentQuestion,
        score,
        lives
    }));
}

function loadProgress() {
    const savedProgress = JSON.parse(localStorage.getItem('gameProgress'));
    if (savedProgress) {
        currentLevel = savedProgress.currentLevel;
        currentQuestion = savedProgress.currentQuestion;
        score = savedProgress.score;
        lives = savedProgress.lives;
        welcomeScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        loadQuestion();
    } else {
        startGame();
    }
}
