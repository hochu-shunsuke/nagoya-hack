"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ThumbsUp } from "lucide-react"
import type { EventProposal } from "@/lib/types"
import { cn } from "@/lib/utils"

interface EventVotingProps {
  proposals: EventProposal[]
}

export function EventVoting({ proposals: initialProposals }: EventVotingProps) {
  const [proposals, setProposals] = useState(initialProposals)
  const [votedIds, setVotedIds] = useState<string[]>([])
  const [showThankYou, setShowThankYou] = useState(false)

  const totalVotes = proposals.reduce((sum, proposal) => sum + proposal.votes, 0)

  const handleVote = (id: string) => {
    if (votedIds.includes(id)) return

    setProposals(
      proposals.map((proposal) => (proposal.id === id ? { ...proposal, votes: proposal.votes + 1 } : proposal)),
    )

    setVotedIds([...votedIds, id])

    // Show thank you message
    setShowThankYou(true)
    setTimeout(() => setShowThankYou(false), 3000)
  }

  return (
    <>
      {/* Thank you message */}
      {showThankYou && (
        <div className="fixed top-4 right-4 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg">
          <div className="flex items-center">
            <ThumbsUp className="h-5 w-5 mr-2" />
            <p>投票ありがとうございます！</p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {proposals.map((proposal) => {
          const votePercentage = totalVotes > 0 ? (proposal.votes / totalVotes) * 100 : 0
          const hasVoted = votedIds.includes(proposal.id)

          return (
            <Card key={proposal.id} className={cn("transition-all duration-300", hasVoted && "border-primary")}>
              <CardHeader>
                <CardTitle>{proposal.title}</CardTitle>
                <CardDescription>{proposal.description}</CardDescription>
                {proposal.category && (
                  <div className="mt-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {proposal.category}
                    </span>
                    {proposal.date && (
                      <span className="ml-2 inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                        {proposal.date}
                      </span>
                    )}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>投票数: {proposal.votes}</span>
                    <span>{votePercentage.toFixed(1)}%</span>
                  </div>
                  <Progress value={votePercentage} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleVote(proposal.id)}
                  disabled={votedIds.includes(proposal.id)}
                  variant={hasVoted ? "outline" : "default"}
                  className="w-full"
                >
                  {hasVoted ? (
                    <span className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      投票済み
                    </span>
                  ) : (
                    "このイベントに投票する"
                  )}
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </>
  )
}

