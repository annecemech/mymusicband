puts "Start"
puts "Clean DB"
Member.destroy_all
Comment.destroy_all
Recording.destroy_all
Partition.destroy_all
Track.destroy_all
Band.destroy_all
User.destroy_all
Instrument.destroy_all

#----------------------------------------------------
puts "Seeding instruments..."
guitar = Instrument.create!(name: "Guitar")
bass = Instrument.create!(name: "Bass")
drums = Instrument.create!(name: "Drums")
vocals = Instrument.create!(name: "Vocals")


#----------------------------------------------------
puts "Seeding users..."

julien = User.new(
  first_name: "Julien",
  last_name: "Dubois",
  email: "julien@mymusicband.com",
  password: "123456"
)
julien.instrument = guitar
julien.avatar.attach(io: File.open('app/assets/images/julien.jpg'), filename: 'julien.jpg', content_type: 'image/jpg')
julien.save!

claire = User.new(
  first_name: "Claire",
  last_name: "Lefevre",
  email: "claire@mymusicband.com",
  password: "123456",
)
claire.instrument = guitar
claire.avatar.attach(io: File.open('app/assets/images/claire.jpg'), filename: 'claire.jpg', content_type: 'image/jpg')
claire.save!

mickael = User.new(
  first_name: "Mickael",
  last_name: "Lambert",
  email: "mickael@mymusicband.com",
  password: "123456",
)
mickael.instrument = bass

mickael.avatar.attach(io: File.open('app/assets/images/mickael.jpg'), filename: 'mickael.jpg', content_type: 'image/jpg')
mickael.save!

emilie = User.new(
  first_name: "Emilie",
  last_name: "Rousseau",
  email: "emilie@mymusicband.com",
  password: "123456"
)
emilie.instrument = drums

emilie.avatar.attach(io: File.open('app/assets/images/emilie.jpg'), filename: 'emilie.jpg', content_type: 'image/jpg')
emilie.save!

#--------------------------------------------------------
puts "Seeding bands"

scream = Band.new(
  name: "I Scream",
  description: "Punk hardcore, post-hardcore, art rock",
  creation_year: "2009",
)
scream.photo.attach(io: URI.open('https://source.unsplash.com/ojVMh1QTVGY/640x438'), filename: 'iscream_photo.jpg', content_type: 'image/jpg')
scream.save!

driveofsoul = Band.new(
  name: "Drive of Soul",
  description: "Grunge, rock alternatif",
  creation_year: "2016",
)
driveofsoul.photo.attach(io: URI.open('https://source.unsplash.com/DI6ywiG5N0g/640x438'), filename: 'drive_of_soul_photo.jpg', content_type: 'image/jpg')
driveofsoul.save!

whocares = Band.new(
  name: "Who Cares",
  description: "Hard rock, post-grunge, alternative rock",
  creation_year: "2012"
)
whocares.photo.attach(io: URI.open('https://source.unsplash.com/UnWYxJ_0WnM/640x438'), filename: 'who_cares_photo.jpg', content_type: 'image/jpg')
whocares.save!

#--------------------------------------------------------
puts "Seeding band members"

#Julien Drive of Soul
member1 = Member.new(
  band: driveofsoul,
  user: julien,
)
member1.save!

#Claire I Scream
member2 = Member.new(
  band: scream,
  user: claire,
)
member2.save!

#Claire Drive of Soul
member3 = Member.new(
  band: driveofsoul,
  user: claire,
)
member3.save!

#Claire Who Cares
member4 = Member.new(
  band: whocares,
  user: claire,
)
member4.save!

#Mickael Who Cares
member5 = Member.new(
  band: whocares,
  user: mickael,
)
member5.save!

#Emilie Who Cares
member6 = Member.new(
  band: whocares,
  user: emilie,
)
member6.save!

#Emilie I Scream
member7 = Member.new(
  band: scream,
  user: emilie,
)
member7.save!

#--------------------------------------------------------
puts "Seeding tracks..."

goodtimes = Track.new(
  title: "Good Times",
  artist: "Louis Cressy Band",
  style: "Rock, Alternative Rock",
  duration: 4*60+10,
  tempo: 156,
  pattern: 4 # 4/4
)
goodtimes.band = whocares
goodtimes.photo.attach(io: URI.open('https://i1.sndcdn.com/avatars-000591731343-z2ee75-t500x500.jpg'), filename: 'good-times.jpg', content_type: 'image/jpg')
goodtimes.save!

brownsugar = Track.new(
  title: "Brown Sugar",
  artist: "The Rolling Stones",
  style: "Rock, Blues Rock",
  duration: 3*60+52,
  tempo: 139,
  pattern: 4 # 4/4
)
brownsugar.band = whocares
brownsugar.photo.attach(io: File.open('app/assets/images/brown-sugar-track.jpg'), filename: 'brown-sugar.jpg', content_type: 'image/jpg')
brownsugar.save!

raspberryjam = Track.new(
  title: "Raspberry Jam",
  style: "Jazz",
  artist: "Thelvnguage",
  duration: 4*60+16,
  tempo: 65,
  pattern: 4 # 4/4
)
raspberryjam.band = whocares
raspberryjam.photo.attach(io: URI.open('https://f4.bcbits.com/img/a2203017928_16.jpg'), filename: 'raspberry-jam.jpg', content_type: 'image/jpg')
raspberryjam.save!

#--------------------------------------------------------
puts "Seeding partitions"

#Partitions for Brown Sugar
partition1 = Partition.new(
  name: "Best drum tab I found so far",
)
partition1.instrument = drums
partition1.track = brownsugar
partition1.user = claire
partition1.resource.attach(io: URI.open('https://i.pinimg.com/originals/ef/dd/6a/efdd6a1d0d2e2b28009c8331ab0a4b1f.jpg'), filename: 'drums-tab-brown-sugar.jpg', content_type: 'image/jpg')
partition1.save!

partition2 = Partition.new(
  name: "Guitar tab with intro riff",
)
partition2.instrument = guitar
partition2.track = brownsugar
partition2.user = claire
partition2.resource.attach(io: URI.open('https://d2fizz4npx5v6x.cloudfront.net/scores-png/1/10489502-1.png'), filename: 'guitar-tab-brown-sugar.jpg', content_type: 'image/jpg')
partition2.save!

partition3 = Partition.new(
  name: "Goes like dom doum dom dom",
)
partition3.instrument = bass
partition3.track = brownsugar
partition3.user = claire
partition3.resource.attach(io: File.open('app/assets/images/the-rolling-stones-Brown-Sugar-bass.jpg'), filename: 'bass-tab-brown-sugar.jpg', content_type: 'image/jpg')
partition3.save!

#Partitions for Good Times
partition4 = Partition.new(
  name: "Best drum tab I found so far",
)
partition4.instrument = drums
partition4.track = goodtimes
partition4.user = claire
partition4.resource.attach(io: File.open('app/assets/images/fake-tab.jpg'), filename: 'drums-tab-goodtimes.jpg', content_type: 'image/jpg')
partition4.save!

partition5 = Partition.new(
  name: "Guitar tab with intro riff",
)
partition5.instrument = guitar
partition5.track = goodtimes
partition5.user = claire
partition5.resource.attach(io: File.open('app/assets/images/fake-tab.jpg'), filename: 'guitar-tab-goodtimes.jpg', content_type: 'image/jpg')
partition5.save!

partition6 = Partition.new(
  name: "Goes like dom doum dom dom",
)
partition6.instrument = bass
partition6.track = goodtimes
partition6.user = claire
partition6.resource.attach(io: File.open('app/assets/images/fake-tab.jpg'), filename: 'bass-tab-goodtimes.jpg', content_type: 'image/jpg')
partition6.save!

partition7 = Partition.new(
  name: "Lyrics for this song",
)
partition7.instrument = vocals
partition7.track = goodtimes
partition7.user = claire
partition7.resource.attach(io: File.open('app/assets/images/fake-tab.jpg'), filename: 'bass-tab-goodtimes.jpg', content_type: 'image/jpg')
partition7.save!

#--------------------------------------------------------
puts "Seeding recording..."

#Recordings for Brown Sugar
recording1 = Recording.new(
  name: "Final shot with the drums",
  is_lead: true
)
recording1.partition = partition1
recording1.user = emilie
recording1.resource.attach(io: File.open('app/assets/sounds/brown-sugar-drums.mp3'), filename: 'brown-sugar-drums.mp3', content_type: 'video/mp3')
recording1.save!

recording2 = Recording.new(
  name: "Let's add acoustic guitar",
  is_lead: false
)
recording2.partition = partition2
recording2.user = emilie
recording2.resource.attach(io: File.open('app/assets/sounds/brown-sugar-acoustic-guitar.mp3'), filename: 'brown-sugar-acoustic-guitar.mp3', content_type: 'video/mp3')
recording2.save!

recording3 = Recording.new(
  name: "My best guitar riff",
  is_lead: false
)
recording3.partition = partition2
recording3.user = claire
recording3.resource.attach(io: File.open('app/assets/sounds/brown-sugar-electric-guitar.mp3'), filename: 'brown-sugar-electric-guitar.mp3', content_type: 'video/mp3')
recording3.save!

recording4 = Recording.new(
  name: "Always better with the bass",
  is_lead: false
)
recording4.partition = partition3
recording4.user = claire
recording4.resource.attach(io: File.open('app/assets/sounds/brown-sugar-bass.mp3'), filename: 'brown-sugar-electric-guitar.mp3', content_type: 'video/mp3')
recording4.save!

#Recordings for Goodtimes

recording5 = Recording.new(
  name: "Final shot with the drums",
  is_lead: true
)
recording5.partition = partition4
recording5.user = emilie
recording5.resource.attach(io: File.open('app/assets/sounds/louiscressy-drums.mp3'), filename: 'louiscressy-drums.mp3', content_type: 'video/mp3')
recording5.save!

recording6 = Recording.new(
  name: "Mickael's amazing voice",
  is_lead: false
)
recording6.partition = partition7
recording6.user = mickael
recording6.resource.attach(io: File.open('app/assets/sounds/louiscressyvoice.mp3'), filename: 'louiscressyvoice.mp3', content_type: 'video/mp3')
recording6.save!

recording7 = Recording.new(
  name: "My best guitar riff",
  is_lead: false
)
recording7.partition = partition5
recording7.user = claire
recording7.resource.attach(io: File.open('app/assets/sounds/louiscressyguitar.mp3'), filename: 'louiscressyguitar.mp3', content_type: 'video/mp3')
recording7.save!

recording8 = Recording.new(
  name: "Let's add a bass to this stuff",
  is_lead: false
)
recording8.partition = partition6
recording8.user = claire
recording8.resource.attach(io: File.open('app/assets/sounds/louiscressy-bass.mp3'), filename: 'louiscressy-bass.mp3', content_type: 'video/mp3')
recording8.save!
#-------------------------------------------------------
puts "Seeding comments"

comment1 = Comment.new(
  content: "#guitar_recording Claire, keep to the tab for F#$! sake. Quit the solos!"
  )
comment1.user = mickael
comment1.track = brownsugar
comment1.save!

comment2 = Comment.new(
  content: "#drums_recording Emilie, a bit faster please, i almost fell asleep..."
  )
comment2.user = mickael
comment2.track = goodtimes
comment2.save!

#-------------------------------------------------------
puts "Seeding inspirations"
inspiration1 = Inspiration.new(name: "that's the emotion we want")
inspiration1.user = claire
inspiration1.track = goodtimes
inspiration1.resource.attach(io: File.open('app/assets/images/freddy.jpeg'), filename: 'freddy.jpeg', content_type: 'image/jpg')
inspiration1.save!

inspiration2 = Inspiration.new(name: "great drum pattern")
inspiration2.user = mickael
inspiration2.track = goodtimes
inspiration2.resource.attach(io: File.open('app/assets/sounds/louiscressy-drums.mp3'), filename: 'louiscressy-drums.mp3', content_type: 'video/mp3')
inspiration2.save!


puts "Finished"
