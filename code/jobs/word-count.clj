(defcluster demo-cluster
  :ganglia {
     :num-instances 2 
     :bootstrap-action.1 "s3://elasticmapreduce/bootstrap-actions/install-ganglia"
     :keep-alive? true
  }
  :num-instances 2
  :slave-instance-type "m1.small"
  :master-instance-type "m1.small"
  :ami-version "2.1.1"
  :hadoop-version "0.20.205" 
  :jar-src-path "/home/ronen/code/clojure-bigdata-processing/code/target/code-0.1.0-standalone.jar"
  :runtime-jar "s3://clj-demo/runs/word-count/2013-02-09-0245-46618a39/jar/code-0.1.0-standalone.jar"
  :bucket "clj-demo"
  :keypair "ec2-keypair"
  )

(defstep demo-step
  :main-class "code.core"
  :args.input "s3n://clj-demo/tom-sawyer.txt"
  :args.output "s3n://clj-demo/${uuid8}")

(fire! demo-cluster demo-step)
