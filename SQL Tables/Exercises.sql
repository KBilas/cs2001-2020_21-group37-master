-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: exercise
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exercises`
--

DROP TABLE IF EXISTS `exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exercises` (
  `exercise_ID` int NOT NULL,
  `exercise_name` varchar(45) DEFAULT NULL,
  `repetitions` varchar(45) DEFAULT NULL,
  `sets` varchar(45) DEFAULT NULL,
  `time_between_sets` varchar(45) DEFAULT NULL,
  `time_after_exercise` varchar(45) DEFAULT NULL,
  `exercise_description` longtext,
  `how_to_do_exercise` longtext,
  `exercise_image` longtext,
  PRIMARY KEY (`exercise_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='This is a typical working day where you train all the push muscles (Chest, Shoulders, Triceps).';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercises`
--

LOCK TABLES `exercises` WRITE;
/*!40000 ALTER TABLE `exercises` DISABLE KEYS */;
INSERT INTO `exercises` VALUES (1,'Bench Press (wide grip with heavy load)','4-6','4','60','90','The bench press is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench. The exercise uses the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles.','Lie flat on your back on a bench. Grip the bar with hands just wider than shoulder-width apart, so when you’re at the bottom of your move your hands are directly above your elbows. This allows for maximum force generation. Bring the bar slowly down to your chest as you breathe in. Push up as you breathe out, gripping the bar hard and watching a spot on the ceiling rather than the bar, so you can ensure it travels the same path every time.  ','https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3837757.jpg&fm=jpg'),(2,'Incline Cable Fly','12-15','3','40','60','The incline bench cable fly is a variation of the cable chest fly and an exercise used to strengthen the pushing muscles of the body including the chest, triceps, and shoulders. The incline cable fly is particularly good for targeting the stubborn upper portion of your pec muscles.','Please your seat dirrectly in the centre of the cable system. While using the D-handles, bring the weights to your seat and sit down with your feet on the floor. Keep your back nice and relaxed and lift the weights exaclty above to the centre of the chest.   ','https://i.ytimg.com/vi/DBHJKvY8mX0/maxresdefault.jpg'),(3,'Standing (vertical) Dumbbell Press\n','10-12','4','40','60','Pressing weight overhead while standing can build powerful shoulders, a bulletproof core, and develop full-body strength. The Standing Dumbbell Press is an excellent exercise to start learning how to press over your head while standing. Pressing weight one hand at a time is much easier and requires less flexibility than pressing weights with both hands over your head at the same time.','Stand with your feet shoulder width apart, with your knees locked, glutes contracted. While keeping your low back straight, press the dumbbell overhead with your right hand by rotating your hand towards your body so that your palm faces forward when your arm is fully extended and your elbow is locked.','https://www.t-nation.com/system/publishing/article_assets/6335/original/Dumbbell-Press.jpg?ts=1509474055'),(4,'Egyptian Cable Lateral Rise','12-15','4','40','60','This is a great and under-estimated exercise for bulding a lot of shoulder strenght and shape. ','Hold the cable machine pole with one hand and lay with your body to the working arm\'s side. Use a D-handle and pull the cable through your legs while flexing your shoulders at the end of the movement.','https://i.ytimg.com/vi/PX5-pI97qi4/maxresdefault.jpg'),(5,'Triceps Press Down','12-15','4','40','60','The triceps press-down is an exercise that requires the use of a cable machine, so it’s one that you’ll need to hit the gym to do (though you can perform an ersatz version of the move using a resistance band attached to something sturdy in your house).','Set the cable machine up with the bar at head height. Grab the bar and stand upright with your back straight and your elbows tucked in to your sides. Stand with your feet hip-width apart, or place one in front of the other if it helps you balance. Pull the cable down until the bar touches your thighs and pause to squeeze your triceps at the bottom of the move. Then slowly raise the bar back to the starting position. Make sure you don’t lean forwards to aid the press and don’t let your elbows leave your sides, otherwise you’ll lose some of the focus on the triceps.','https://i.ytimg.com/vi/mpZ9VRisAyw/maxresdefault.jpg'),(6,'Static Dumbbell Holds','60 sec','2','60','90','What you\'re doing here, is the negative part (the downward part) of a dumbbell bench press, and pausing in the most stressed position. Maintaining that time under tension is going to force the muscles in your chest to adapt and grow.','Set up in a normal dumbbell benching position. Lower the weights slowly until you reach full tension. Maintain the position for 60 seconds.','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-doing-dumbbell-incline-bench-press-workout-royalty-free-image-522600373-1540485179.png?crop=1.00xw:0.752xh;0,0.0649xh&resize=1200:*'),(7,'Rope Face Pull','20','3','40','60','The move is one of those underrated exercises you\'re probably not doing often—or at all. But you should definitely be making it a part of your regular upper-body routine because of it\'s simplicity and effectiveness, and it also makes a great warmup to bulletproof your shoulders.','Hold the rope with an overhand (externally rotated) grip, with your thumbs up. Take a few steps back from the tower to extend the cable. Keep a strong athletic stance, activating your core and glutes. Squeeze your shoulder blades together to pull the handles of the rope in toward your face. Hold the position for 2 seconds. Return to the starting position, making sure to keep your shoulders up.   ','https://cdn1.coachmag.co.uk/sites/coachmag/files/2017/07/2-3b-cable-face-pull.jpg'),(8,'One-Arm Lat Pull-in','15-20','2','40','60','This is a great exercise to increase blood-flow to your back muscles that will also warm your back up.','Squeeze your shoulder blades together, take a deep breath and pull the handle to your upper chest, focusing on the lats and pulling your elbow back and down. Pause, then slowly release the bar back to the start.','https://expertfitnesstips.files.wordpress.com/2015/02/screen-shot-2013-09-04-at-11-18-54-am_0.png'),(9,'Wide Grip Pull-up','6-8','3','60','90','The wide-grip pullup is an upper-body strength movement that targets your back, chest, shoulders, and arms. It also gives your core muscles a pretty fantastic workout. Including wide-grip pullups in your overall fitness routine can help increase your strength in other movements, such as the lat pulldown and shoulder press. ','Reach up and grab the bar with each hand. Your thumbs should be pointing toward each other, and your grip should be wider than your body. When positioned correctly, your arms and torso should form a ‘Y.’ To be more specific, each arm should be 30 to 45 degrees from your body, but no more than a 45-degree angle. Look straight ahead and pull your body upwards towards the bar. Pause, then lower yourself back down to the original position.  ','https://www.ammfitness.co.uk/information-advice/wp-content/uploads/2019/11/wide-grip-pull-ups.jpeg'),(10,'Meadows Row','10-12','3','60','90','The meadows row is a unilateral landmine exercise used to target the muscles of the back. The meadows row also challenges one\'s grip and indirectly targets the muscles of the bicep. The meadows row is named after John Meadows, who popularized the movement.','Position a barbell in a landmine attachment or wedged into the corner of a wall. Hinge forward with a staggered stance and grasp the barbell with a pronated (overhand) grip. Begin the movement by driving the elbow behind the body while retracting the shoulder blade. Pull the barbell towards your hip until the elbow is at (or just past) the midline and then slowly lower the barbell back to the starting position under control. Repeat for the desired number of repetitions on both sides.    ','https://i.ytimg.com/vi/lPPNLJhgZWE/maxresdefault.jpg'),(11,'Rope Face Pull','15-20','2','30','60','Enter the face pull. The move is one of those underrated exercises you\'re probably not doing often—or at all. But you should definitely be making it a part of your regular upper-body routine because of it\'s simplicity and effectiveness, and it also makes a great warmup to bulletproof your shoulders.','Hold the rope with an overhand (externally rotated) grip, with your thumbs up. Take a few steps back from the tower to extend the cable. Keep a strong athletic stance, activating your core and glutes. Squeeze your shoulder blades. Keep your elbows high and drive them as far as possible past your ears. Rotate at your shoulders. Keep your torso and back upright, and resist the urge to lean forward. Don\'t go too fast. The slower you go, the more your muscles will have to work.   ','https://cdn1.coachmag.co.uk/sites/coachmag/files/2017/07/2-3b-cable-face-pull.jpg'),(12,'Reverse Pec Deck','15-20','2','30','60','In the shoulder joint, the primary muscles are the posterior deltoid, infraspinatus, and teres minor. Of these the posterior deltoid is the largest and most powerful. It is an antagonist to the anterior deltoid in horizontal adduction and comprises the rearmost portion of the deltoid muscle. This muscle gives the full rounded shoulder appearance when viewed from the side and rear. The teres minor and infraspinatus are rotator cuff muscles located on the lower portion of the outer scapulae. Their main action is pulling the arms backward when level with the shoulders.','Adjust the seat height of the pec deck machine so that when you sit in the machine and grasp the handles your arms will be parallel to the floor. Use a neutral grip (palms facing in) or a pronated grip (palms facing down) if available. Maintain an erect trunk position with your chest in contact with the front support pad. Arms should be directly in front of the body or slightly out to the sides in the beginning position. Inhale and hold your breath as you pull your arms as far back as possible. Your upper arms (elbows) should be approximately 20 to 30 degrees behind the level of the back in the end position. Keep your arms slightly bent in the elbow joints as you move the arms backward through the full range of motion.   ','https://the-optimal-you.com/wp-content/uploads/2017/01/the-optimal-you-reverse-pec-fly.jpg'),(13,'Band Pull Aparts','15-20','2','30','60','Spending all day sitting at a desk is a shortcut to all kinds of health issues. The symptoms of slouching are commonly felt in your lower back, but pain will also work its way up into your shoulders if you don’t fix that poor posture. The band pull-apart is an excellent way to do just that. It’s an easy exercise that can be done anywhere, even in front of the TV in the evening, and working it into your daily routine will do plenty to combat the problems your desk-bound lifestyle is causing your upper back and shoulders. ','Stand up straight and hold an exercise band out in front of you at around chest height. Your hands should be shoulder width apart. Then pull the band apart, squeezing your shoulder blades together. Then return to the starting position.','https://www.t-nation.com/system/publishing/article_assets/4186/original/Band-Pull-Apart.JPG?ts=1474573374'),(14,'EZ-Bar Bicep Curl','6-8','3','40','60','If you want bigger biceps then the tools you use, rather than the exercises you select and the variables you manipulate, could be key to faster muscle growth. Using an EZ-bar, which has an undulating handle, will stimulate greater muscle activation in your biceps than either a barbell or dumbbells, according to a study in the Journal Of Life And Environmental Sciences. If your gym doesn’t have an EZ-bar, you should use a barbell, which produced more muscle activation than dumbbells. ','An EZ-bar curl is, well, easy. Stand with your feet shoulder-width apart, knees slightly bent. Hold an EZ-bar in an underhand grip with your arms extended and then curl the bar up towards your chest, keeping your elbows in to your sides.','https://qph.fs.quoracdn.net/main-qimg-6f2107637ffb45cacf58feb18e328cac.webp'),(15,'Incline Dumbbell Curl','15-20','2','60','60','If you are looking to get bigger and stronger arms then the incline dumbbell curl is what you need to add into your workout routine. This workout isolates the long head of your bicep, stretches it and pushes you to apply more force while contracting. This means that it can be a great exercise if you are looking to maximize the bicep peak.','Sit on an incline bench with a dumbbell in each hand, holding them at arm’s length. Try keeping your elbows close to your torso and rotate the palms of your hands until they are facing forward. This is your starting position. Keep your upper arm stationary and curl the weights forward while contracting the biceps as you breathe out. Make sure that only the forearms are moving. Continue the movement until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a second. Slowly begin to bring the dumbbells back to starting position as you breathe in. Repeat for the recommended amount of repetitions.  ','https://i.ytimg.com/vi/UeleXjsE-98/maxresdefault.jpg'),(16,'Rack Pull','6-8','3','60','90','If you’ve seen someone doing rack pulls in your gym you might have made the mistake of dismissing them as a poor man’s deadlift. While it’s true that rack pulls have a shorter range of motion than a deadlift, they work the same muscles and by shortening the movement of the exercise, rack pulls allow you to lift a heavier weight. This will result in stronger back muscles, as well as helping to improve your form and power in the top half of a standard deadlift.','When the bar is in your favoured position, grasp it with your palms facing towards you and your hands shoulder-width apart. Engage your hamstrings by pushing your hips back. Keeping your back straight and looking forwards throughout the movement, lift the weight by driving your hips forwards and straightening your knees. Pull your shoulders back at the top of the movement, then slowly reverse the movement and lower the bar back into the power rack.','https://i0.wp.com/kingofthegym.com/wp-content/uploads/2019/11/Snatch-Grip-Rack-Pull-Eccentric-Front-View.jpg'),(17,'Squat','4-6','3','60','90','The squat is a dynamic strength training exercise that requires several muscles in your upper and lower body to work together simultaneously. Many of these muscles help power you through daily tasks such as walking, climbing stairs, bending, or carrying heavy loads. They also help you perform athletic-related activities. Adding squats to your workouts can help boost your exercise performance, decrease your risk of injury, and keep you moving more easily throughout the day. But these are just a few of the benefits.  ','Start with your feet slightly wider than hip-width apart. Keep your chest up, engage your abdominals, and shift your weight onto your heels as you push your hips back into a sitting position. Lower your hips until your thighs are parallel or almost parallel to the floor. You should feel the squat in your thighs and glutes. Pause with your knees over, but not beyond, your toes. Exhale and push back up to the starting position.     ','https://cdn1.coachmag.co.uk/sites/coachmag/files/2019/09/barbell-back-squat.jpg'),(18,'Romanian Deadlift','8','3','60','90','The Romanian deadlift (RDL) is a traditional barbell lift used to develop the strength of the posterior chain muscles, including the erector spinae, gluteus maximus, hamstrings and adductors. When done correctly, the RDL is an effective exercise that helps strengthen both the core and the lower body with one move.','Use a pronated (palms-down) grip to firmly grasp a barbell with the hands approximately shoulder-width apart. Maintain a slight bend in the knees with the feet hip-width apart and allow the bar to rest along the front of the thighs. You can also use dumbbells; adjust the instructions to reflect holding one dumbbell in each hand. Lift the chest and pull the shoulder blades down toward the back pockets to maintain extension of the spine before pushing the tailbone in the posterior direction to hinge at the hips. Cue the client to keep his or her chin tucked into the neck as if holding an egg. This will help the cervical spine maintain a safe position during the movement. Allow the weight to lower toward the floor while maintaining length through the spine. Do NOT allow the client to round the back or extend the knees while lowering the weight. Coach the client to lower until tension is felt in the back of the thighs—probably when the bar gets to about knee height or, if the client has more flexibility in the hamstrings, to about mid-shin. Instruct the client to look toward the floor, as looking at a mirror can create stress in the cervical spine. If necessary, move the client away from facing a mirror so he or she can focus on the movement. To return to standing, push both heels into the floor, press the hips forward and pull back on the knees while keeping a long spine. Allow the barbell to return to the front of the thighs. Cuing the client to pull back on the knees will engage the distal attachments of the hamstring and adductor muscles, which help extend the knee when the foot is in a closed-chain position. Keep the spine long and maintain a slight bend in the knees throughout the movement. For best results, use a squat rack to rest the barbell at thigh-to-waist height when starting, as opposed to trying to lift the weight up from the floor. Starting with the weight at the appropriate height can help the client begin in a good starting position.      ','https://cdn1.coachmag.co.uk/sites/coachmag/files/2017/07/romanian-deadlift.jpg'),(19,'Walking Lunges','20 strides','3','60','90','Walking lunges are a variation on the static lunge exercise. Instead of standing back upright after performing a lunge on one leg, as you would in a static bodyweight lunge, you “walk” forward by lunging out with the other leg. The movement continues for a set number of reps.','Stand up straight with your feet shoulder-width apart. Your hands can stay by the side of your body or on your hips. Step forward with your right leg, putting the weight into your heel. Bend the right knee, lowering down so that it’s parallel to the floor in a lunge position. Pause for a beat. Without moving the right leg, move your left foot forward, repeating the same movement on the left leg. Pause as your left leg is parallel to the floor in a lunge position. Repeat this movement, “walking” forward as you lunge, alternating legs.    ','https://upl.stack.com/wp-content/uploads/2017/11/08134141/Walking-Lunge-STACK.png'),(20,'Single Leg Extensions','10','3','30','60','Leg extensions are exercises usually done with a lever machine. ... The exercise works mainly the quadriceps muscles of the front of the thigh—the rectus femoris and the vastus muscles. You can use this exercise to build lower body strength and muscle definition as part of a strength training workout. ','Place your hands on the hand bars. Lift the weight while exhaling until your legs are almost straight. Do not lock your knees. Keep your back against the backrest and do not arch your back. Exhale and lower the weight back to starting position.','https://i.ytimg.com/vi/ymCvLgI9wlA/maxresdefault.jpg'),(21,'Single Leg Lying Curl','8-12','3','40','60','The single-leg lying leg curl is a popular machine-based exercise for the legs, particularly the hamstrings. It is similar to the seated leg curl, but the open hip angle in the lying leg curl may incorporate more glute and calf activation. It is usually performed for moderate to high reps, such as 8-12 reps per set or more, as part of a leg pre-exhaust or as a muscle-building movement for lower-body training. Performing it one leg a time allows you to focus on the mind-muscle connection of each leg and address muscle imbalances. ','Start by lying flat on your stomach. Adjust the roller pad so that it rests comfortably a few inches under your calves, just above the heels. Check to make sure the pads aren\'t too high up on your calves as this can place pressure on your Achilles tendon and reduce your range of motion. Stretch your legs out fully. On an inhale, lightly grasp the support handles on each side of the machine. Lift your feet smoothly as you exhale, keeping your hips firmly on the bench. Inhale as you flex your knees and pull your ankles as close to your buttocks as you can. Hold this position for a beat, allowing yourself to make sure you are focused as you prepare to lower your legs. Inhale fully as you return your feet to starting position in a smooth, slow, controlled movement.     ','https://i.ytimg.com/vi/lQSlJHtsnRA/maxresdefault.jpg'),(22,'Single Leg Press Calf Raise','10-12','3','30','60','The calf muscles are powerful, but it is rather hard to make them big if our genetics is not the best one. To make them grow, we train our calves with standing and sitting exercises, many times a week, and with various reps.','Sit down at the leg press machine and rest your feet so just your toes are resting at the bottom of the platform. Push back as far as you can while keeping your feet against the platform. Return under control to the start position and repeat.','https://i.ytimg.com/vi/cSpRIw26Xd0/maxresdefault.jpg'),(23,'Seated Calf Raise','20','3','40','60','The seated calf raise is a variation of the machine calf raise and an exercise used to isolate the muscles of the calves. The calves can be a stubborn muscle group for a lot of people, so it’s important to experiment with several different angles when performing calf raises. You may also want to consider training the calves with a high training frequency. The seated calf raise can be incorporated into your leg workouts and full body workouts.  ','Take a seat on the machine and place the balls of your feet on the platform with your toes pointed forward - your heels will naturally hang off. Position the base of quads under the knee pad and allow your hands to rest on top. Extend your ankles and release the safety bar. Lower the heels by dorsiflexing the ankles until the calves are fully stretched. Extend the ankles and exhale as you flex the calves. Repeat for the assigned number of repetitions.    ','https://i.ytimg.com/vi/Yh5TXz99xwY/maxresdefault.jpg');
/*!40000 ALTER TABLE `exercises` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-28 12:22:23
